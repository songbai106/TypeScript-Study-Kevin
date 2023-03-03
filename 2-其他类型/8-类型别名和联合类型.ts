// 类型别名用来给一个类型起个新名字。
// 类型别名，诚如其名，即我们仅仅是给类型取了一个新的名字，并不是创建了一个新的类型
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}


// 联合类型表示取值可以为多种类型中的一种，使用 | 分隔每个类型
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven'; // OK
myFavoriteNumber = 7; // OK


// 联合类型通常与 null 或 undefined 一起使用：
const sayHello = (name: string | undefined) => {
    
    /* ... */
  };
// 这里 name 的类型是 string | undefined 意味着可以将 string 或 undefined 的值传递给sayHello 函数。
sayHello("ahashdahsd"); 
sayHello(undefined);



let num: 1 | 2 ;
type EventNames = 'click' | 'scroll' | 'mousemove';
// 以上示例中的 1、2 或 'click' 被称为字面量类型，用来约束取值只能是某几个值中的一个。

num = 3
let EventNames: EventNames = 'click'


export { }
