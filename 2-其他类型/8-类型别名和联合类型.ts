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






export { }
