### 启动项目

```bash
npm install
npm start
```



### 要实现的效果

![preview](https://uidesigndaily.fra1.digitaloceanspaces.com/uploads/1042/day_1042.png)



### CSS

```css
// 首字母大写
text-transform: capitalize;
```



### JS

#### 组件传值

```js
<List people={people} />
```

```js
// List.js
const List = ( {people} ) => { return }
```



#### 清空数组

```js
<button onClick={() => setPeople([])}>clear</button>
```

