# 菜单列表

### 效果预览

![预览](5.png)

### 分类目录

#### 在app.js中定义过滤数据的方法

传递到Category组件中

```jsx
const filterCategories = (cate) => {
    // 如果 category是 all 就将MenuItems设置为之前的值
    if(cate==='all'){
        setItems(items)
        return
    }
    const newItems = items.filter(item => item.category === cate)
    setItems(newItems)
}
```



#### 如何让目录与data里的值一致

而不是每有一个新的category你就得手动增加一个category btn

1. get unique category in items data
2. add 'all'
3. show them in category list

```
const allUnqiueCategories = ["all", ...new Set(items.map((item) => item.category))]
```

