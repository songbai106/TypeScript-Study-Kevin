let x: [string, number]; 
// 类型必须匹配且个数必须为2
// x = ['xxx'] //Error
// x = ['hello', 10]; // OK 
// x = ['hello', 10,10]; // Error 
// x = [10, 'hello']; // Error


// 元组类型的解构赋值
let employee: [number, string] = [1, "Semlinker"];
let [id, username] = employee;
let employee1: [string, string, object] = ['s1', 's2', {s3: 's3'}]
let [a, b, c] = employee1
console.log(`id: ${id}`);
console.log(`username: ${username}`);
console.log(a, b, c)

// 元组类型的可选元素
// 与函数签名类型，在定义元组类型时，我们也可以通过 ? 号来声明元组类型的可选元素，示例如下：
let optionalTuple: [string, boolean?];
optionalTuple = ["Semlinker", true];
console.log(`optionalTuple : ${optionalTuple}`); // optionalTuple : Semlinker,true
optionalTuple = ["Kakuqo"];
console.log(`optionalTuple : ${optionalTuple}`); // optionalTuple : Kakuqo


// 元组类型的剩余元素
/**
 * 元组类型里最后一个元素可以是剩余元素，形式为 ...X，这里 X 是数组类型。
 * 剩余元素代表元组类型是开放的，可以有零个或多个额外的元素。 
 * 例如，[number, ...string[]] 表示带有一个 number 元素和任意数量string 类型元素的元组类型。例子：
 */
 type RestTupleType = [number, ...string[]];
 let restTuple: RestTupleType = [666, "Semlinker", "Kakuqo", "Lolo"];
 console.log(restTuple[0]);
 console.log(restTuple[1]);


// 只读的元组类型
const point: readonly [number, number] = [10, 20];
// Cannot assign to '0' because it is a read-only property.
point[0] = 1;
// Property 'push' does not exist on type 'readonly [number, number]'.
point.push(0);
// Property 'pop' does not exist on type 'readonly [number, number]'.
point.pop();
// Property 'splice' does not exist on type 'readonly [number, number]'.
point.splice(1, 1);


export { }
