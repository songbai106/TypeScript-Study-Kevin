// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
// 简单说就是：泛指的类型，不确定的类型，可以理解为一个占位符（使用T只是习惯，使用任何字母都行）

function identity<T>(arg: T): T {  // T 是一个抽象类型，只有在调用的时候才确定它的值
    return arg;
  }

// 其中 T 代表 Type，在定义泛型时通常用作第一个类型变量名称。但实际上 T 可以用任何有效名称代替。
// 除了 T 之外，以下是常见泛型变量代表的意思：
/**
 *  K（Key）：表示对象中的键类型；
    V（Value）：表示对象中的值类型；
    E（Element）：表示元素类型。
 */
    function identity2 <T, U>(value: T, message: U) : T {
        console.log(message);
        return value;
      }
      console.log(identity2(68, "xxx"));



  function trace<T>(arg: T): T {
    console.log(arg.size); // Error: Property 'size doesn't exist on type 'T'
    return arg;
  }

/**实现这个需求的关键在于使用类型约束。 使用 extends 关键字可以做到这一点。简单来说就是你定义一个类型，然后让 T 实现这个接口即可。 */
interface Sizeable {
    size: number;
  }
  function trace2<T extends Sizeable>(arg: T): T {
    console.log(arg.size);
    return arg;
  }


// 泛型接口
// 可以使用含有泛型的接口来定义函数的形状：
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc<any>;
createArray = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']


// 泛型参数的默认类型
// 我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。
function createArrayXXX<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}



  
export { }
