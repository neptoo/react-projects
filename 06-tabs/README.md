# 侧边栏tab

[灵感来源](https://gatsby-strapi-portfolio-project.netlify.app/)

## 特性

### 如何使用`useEffect`调用函数

```jsx
useEffect(() => {
	fetchTours();
}, []);
```

### 解构对象时报错

`Cannot destructure property 'company' of 'jobs[value]' as it is undefined.`

### 侧边栏tabs按钮的样式

某个条件为真时给按钮增加一个样式

```jsx
<button
className={`job-btn ${index === value && "active-btn"} `}
>button</button>
```
