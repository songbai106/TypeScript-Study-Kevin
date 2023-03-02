// 普通枚举
enum Color {
    RED,
    PINK,
    BLUE,
  }
  
  const red: Color = Color.RED;
  console.log(red, Color); // 0

// 设置初始值
  enum Color2 {
    RED = 2,
    PINK,
    BLUE,
  }
  const pink2: Color2 = Color2.PINK;
  console.log(pink2, Color2); // 3


// 字符串枚举
enum Color3 {
    RED = "红色",
    PINK = "粉色",
    BLUE = "蓝色",
  }
  
  const pink3: Color3 = Color3.PINK;
  console.log(pink3); // 粉色

// 常量枚举
const enum ColorCONST {
    RED,
    PINK,
    BLUE,
  }
  
  const colorCONST: ColorCONST[] = [ColorCONST.RED, ColorCONST.PINK, ColorCONST.BLUE];
  console.log(colorCONST); //[0, 1, 2]
  
  //编译之后的js如下：
//   var colorCONST = [0 /* RED */, 1 /* PINK */, 2 /* BLUE */];
  // 可以看到我们的枚举并没有被编译成js代码 只是把color这个数组变量编译出来了



export { }
