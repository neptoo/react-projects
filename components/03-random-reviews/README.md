# Random Reviews

## 预览

![preview](./3.png)

## 特性

- React Icons 的使用
- 渲染列表中的随机一个人的信息
- icons图标展示在图像上
- 按顺序显示列表， 点击prev上一个 next下一个进行列表项切换
- 点击`surprise` 随机出现一个item
- 如果随机数和当前索引一致 需要对随机数再处理一下



## 生成随机数

```js
// Math.random() 会随机生成 [0, 1)之间的数 永远不会是1
let randomNum = Math.floor(Math.random() * people.length); // [0, 4)
```



## 列表item切换的边界值处理

```js
const checkNum = (num) => {
    if (num < 0) {
      return people.length - 1;
    }
    if (num > people.length - 1) {
      return 0;
    }
    return num;  // <-- return
}
```

```js
  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNum(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNum(newIndex);
    });
  };
```



## 使用本地的模拟的js数据

```jsx
import people from "./data";

const Review = () => {
  console.log(people);
};
```

```js
const reviews = [{...}, ..., {...}]
export default reviews;
```



## 数据解构

```js
 const { name, image, job, text } = people[index];
```

