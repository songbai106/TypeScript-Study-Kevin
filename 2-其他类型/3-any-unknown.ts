// 任意值（Any）用来表示允许赋值为任意类型。
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// 但如果是 any 类型，则允许被赋值为任意类型。
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

let myFavoriteNumber2: any = 'seven';
myFavoriteNumber2 = 7;

// 在任意值上访问任何属性都是允许的：也允许调用任何方法：
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

// 弊端就是一夜回到解放前 everthing is any 是写起来跟JS一样，流畅的很，爽的很


// unknown与any一样，所有类型都可以分配给unknown:
let notSure: unknown = 4;
notSure = "maybe a string instead"; // OK
notSure = false; // OK

// unknown与any的最大区别是： 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。
// unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
let notSure1: unknown = 4;
let uncertain1: any = notSure1; // OK

let notSure2: any = 4;
let uncertain2: unknown = notSure2; // OK

let notSure3: unknown = 4;
let uncertain3: number = notSure3; // Error

// 这种机制起到了很强的预防性，更安全，这就要求我们必须缩小类型，我们可以使用typeof、类型断言等方式来缩小未知范围：
function getDogName() {
    let x: unknown;
    return x;
   };
   const dogName = getDogName();
   // 直接使用
   const upName = dogName.toLowerCase(); // Error
   // typeof
   if (typeof dogName === 'string') {
     const upName2 = dogName.toLowerCase(); // OK
   }


   // 类型断言 
   const upName3 = (dogName as string).toLowerCase(); // OK





export { }