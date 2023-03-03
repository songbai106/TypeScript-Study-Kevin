// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
/**
 * 有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
 * TypeScript 类型检测无法做到绝对智能，有时会碰到我们比 TypeScript 更清楚实际类型的情况，比如：
 */
 const arrayNumber: number[] = [1, 2, 3, 4];
 const greaterThan2: number = arrayNumber.find(num => num > 2); // 提示 ts(2322)

/**
 * 其中，greaterThan2 一定是一个数字（确切地讲是 3），因为 arrayNumber 中明显有大于 2 的成员，但静态类型对运行时的逻辑无能为力。
在 TypeScript 看来，greaterThan2 的类型既可能是数字，也可能是 undefined，所以上面的示例中提示了一个 ts(2322) 错误，
此时我们不能把类型 undefined 分配给类型 number。
不过，我们可以使用一种笃定的方式——类型断言（类似仅作用在类型层面的强制类型转换）告诉 TypeScript 按照我们的方式做类型检查。
比如，我们可以使用 as 语法做类型断言，如下代码所示：
 */
const arrayNumber3: number[] = [1, 2, 3, 4];
const greaterThan4: number = arrayNumber3.find(num => num > 2) as number;  // 3

// 语法
// 尖括号 语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as 语法
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;

// 以上两种方式虽然没有任何区别，但是尖括号格式会与react中JSX产生语法冲突，因此我们更推荐使用 as 语法。


// 非空断言
// 在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型。
// 具体而言，x! 将从 x 值域中排除 null 和 undefined 。
let mayNullOrUndefinedOrString: null | undefined | string;
mayNullOrUndefinedOrString!.toString(); // ok
mayNullOrUndefinedOrString.toString(); // ts(2531)

type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator | undefined) {
  // Object is possibly 'undefined'.(2532)
  // Cannot invoke an object which is possibly 'undefined'.(2722)
  const num1 = numGenerator(); // Error
  const num2 = numGenerator!(); //OK
}


// 确定赋值断言
// 允许在实例属性和变量声明后面放置一个 ! 号，从而告诉 TypeScript 该属性会被明确地赋值。
let x: number;
initialize();

// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error  将前面改为  let x!: number; 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。
function initialize() {
  x = 10;
}










export { }