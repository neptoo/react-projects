# Tour List

## 特性

- 卡片式新闻列表
- Read more / Show less
- 不感兴趣
- loading加载效果



### 点击Tour组件按钮移除列表项

按钮在单个Tour组件里，数组的操作在最外层 app.js 里

逐级向下传递App -- Tours -- Tour

### 三元运算符和函数计算

注意表达式的 {} ${} 符号 和 内容渲染 位置 顺序

```js
<p>{readMore ? info : `${info.substring(0, 200)}`}...</p>
```



### 将对象各个属性解构然后传递给另一个组件

for循环不要忘了key值

```js
<div>
    {tours.map((tour) => {
      return <Tour key={tour.id} {...tour} />;
    })}
</div>
```



### 条件为真进行渲染

```jsx
if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
}
```



### 从api拉取数据

```js
const url = "http://localhost:3000/tours.json";

// 获取api接口数据
const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
};

// 调用
useEffect(() => {
	fetchTours();
}, []);
```



## 最终效果

![预览](/preview.png)
