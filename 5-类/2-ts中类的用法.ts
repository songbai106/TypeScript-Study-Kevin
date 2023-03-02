// TypeScript 中类的用法

// public private 和 protected

// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问 , 在子类中也是不允许访问的：
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

// class Animal {
//     public name;
//     public constructor(name) {
//       this.name = name;
//     }
//   }
  
//   let a = new Animal('Jack');
//   console.log(a.name); // Jack
//   a.name = 'Tom';
//   console.log(a.name); // Tom

//   class Animal {
//     private name;
//     public constructor(name) {
//       this.name = name;
//     }
//   }
  
//   let a = new Animal('Jack');
//   console.log(a.name);
//   a.name = 'Tom';

// 当构造函数修饰为 private 时，该类不允许被继承或者实例化：
// class Animal {
//     public name;
//     private constructor(name:any) {
//       this.name = name;
//     }
//   }
//   class Cat extends Animal {
//     constructor(name:any) {
//       super(name);
//     }
//   }
  
//   let a = new Animal('Jack');

// 当构造函数修饰为 protected 时，该类只允许被继承：

// class Animal {
//     public name;
//     protected constructor(name:any) {
//       this.name = name;
//     }
//   }
//   class Cat extends Animal {
//     constructor(name) {
//       super(name);
//     }
//   }
  
//   let a = new Animal('Jack');


//  参数属性
// 修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。
// class Animal {
//     readonly name;
//     public constructor(name:any) {
//       this.name = name;
//     }
//   }
  
//   let a = new Animal('Jack');
//   console.log(a.name); // Jack
//   a.name = 'Tom';
  
// 注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面。
// class Animal {
//     // public readonly name;
//     public constructor(public readonly name) {
//       // this.name = name;
//     }
//   }


// 抽象类
// abstract 用于定义抽象类和其中的抽象方法。
// 首先，抽象类是不允许被实例化的：
// abstract class Animal {
//     public name;
//     public constructor(name:any) {
//       this.name = name;
//     }
//     public abstract sayHi();
//   }
  
//   let a = new Animal('Jack');
  
// 其次，抽象类中的抽象方法必须被子类实现：
abstract class Animal {
    public name;
    public constructor(name:any) {
      this.name = name;
    }
    public abstract sayHi():any;
  }
  
  class Cat extends Animal {
    public eat() {
      console.log(`${this.name} is eating.`);
    }
    // 必须要实现 父抽象类中的sayHi()
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
      }
  }
  
  let cat = new Cat('Tom');


// 类的类型
// 给类加上 TypeScript 的类型很简单，与接口类似：
class AnimalType {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHi(): string {
      return `My name is ${this.name}`;
    }
  }
  
  let a: AnimalType = new AnimalType('Jack');
  console.log(a.sayHi()); // My name is Jack
  

export { }
