## 1.Birthday Reminder

[UI来源](https://www.uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042)

应用：生日提醒

目标是构建一个卡片列表，包含头像图片和姓名年龄文本，一个清空列表项的按钮

#### 如何实现列表item的左边头像，右边两行文本的对齐效果？

给`<article>`容器设置grid布局，`align-items: center;`使子元素在网格区域块内对齐

> grid-template-columns: auto 1fr; 左侧自身多大就占据多大 右侧是1fr（除掉左侧占据的空间 剩余有多大就占用多大）

#### 如何实现点击按钮清空列表？

使用useState，它接收一个初始化值，**返回**一个数组，第一个是状态，第二个是修改状态的函数

在button上绑定onClick函数，点击就调用`setPeople([])`



## 2.Tours List 

应用：旅游新闻列表

目标是创建一个新闻列表，每条新闻包含一个封面图、标题和价格、省略版摘要、不感兴趣按钮。

组件层级 TourList > Tours > Tour

#### 如何在React中获取API数据？

在useEffect中发送API请求，在页面渲染之后马上执行里面的代码

```js
useEffect(() => {
  fetchTours();
}, []);
```

具体的发送API请求的方法：

使用async...await发送和等待接口返回，使用fetch(url)获取API数据；

使用try..catch捕获错误，设置对应的loading加载状态

```js
const fetchTours = async () => {
    const res = await fetch('https://.../xxx')
}
```



#### 点击"阅读更多"展开更多摘要，点击"显示更少"折叠部分文本？



#### 如何实现点击不感兴趣，从列表中删除该项？

TourList里定义removeTour函数，作用是移除单个新闻卡片

使用props，`removeTour={removeTour}`一层层传递方法，然后在最内层按钮的点击时调用

```
const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours);
};
```



## 3.Random Reviews 随机评论



## 4.Accordion 折叠手风琴效果

[灵感来源](https://uidesigndaily.com/posts/sketch-accordion-website-day-1175)



## 5.Menu 分类列表



## 6.Side Tabs 侧边栏



## 7.Reviews Carousel 轮播图



## 8.Lorem Lpsum 占位符文本生成器



generate dummy text by entering the number of paragraphs you need

input < 0 => get one paragragh

Only have 8 paragraphs in the database. If your input number is greater than 8, you will only receive the maximum of 8 paragraphs



## 9.Color Generator 输入颜色生成同色系颜色

特性：复制到剪贴板；根据颜色深浅更改文本颜色

依赖库：[values.js](https://github.com/noeldelgado/values.js)

#### 复制到剪贴板？

`navigator.clipboard.writeText()`



## 10.Grocery 仓库

特性：

CRUD 增加 编辑 删除 清空

LocalStorage

Alert--不同的事件显示不同颜色和提示文本

#### 增删改查

查找：JSON.parse(localStorage.getItem("list"))

新增：使用new Date().getTime() 给一个新的id，结合输入的name，再使用扩展运算符新增到list里

修改：在父组件中定义editItem方法：使用find()根据id找到编辑的对象；在子组件中将id传递给editItem

删除：接收子组件的id，使用filter()筛选出新数组并赋值

#### 封装一个Alert组件

使用useState完成变量初始化，初始值是一个对象，包含show、msg和type三个属性

Alert组件的HTML部分是一个p标签，根据type和msg渲染内容

使用useEffect，每次list数组变更时，在Alert组件内执行代码：3s后清除Alert，返回clearTimeout

清除Alert：

```js
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, msg, type });
  };
```

展示Alert：`showAlert(true, "success", "value changed");`

## 11.Navbar 导航栏

特性：适应移动端；给菜单切换隐藏增加动画；

#### 如何使用useRef使得容器高度根据内容自适应？

情景：封装移动端menu组件，增加menu数据，但是外层的容器高度之前是固定的

- 使用useRef定义一个linksRef，一个linksContainerRef，分别设置到ul和ul外层容器上
- showLinks判断移动端菜单栏是否展开
- 使用useEffect，在依赖项showLinks发生变化时执行部分代码
- 使用`ref.current.getBoundingClientRect().height`获取ul列表的高度
- 如果showLinks为true，通过`style.height`设置容器的高度和ul高度一致；否则就设置为0



## 12.Sidebar Modal

#### 怎么使用useContext + 自定义Hook实现全局状态管理？

实现一个通用组件侧边栏  假设在主页面有一个按钮，控制侧边栏的开关

思路：

使用自定义hook -- useGlobalContext，创建一个全局的上下文管理器，可以在任何地方访问或者修改全局状态

具体实现：

```
1.在src目录下创建context.js：
1.1.使用React.createContext创建一个AppContext
	1.2.创建一个AppProvider，它接收children作为参数，
		在这里定义状态或者函数
		返回一个AppContext.Provider，通过value属性将任意数据状态或者函数方法 传递出去
	1.3最后使用export关键字导出
2.在index.js文件中引入，使用AppProvider包裹应用根组件，这样子组件就可以访问到全局状态了
3.使用：在子组件SideBar中引入，它会返回的是Provider提供的value，e.g. siderbarOpen, setSidebar
```



## 13.Stripe Submenu 带下拉菜单的响应式导航栏

如何实现子菜单--根据内容扩展宽高？

移动端导航栏弹窗？



## 14.Shopping Cart 购物车组件

#### 使用context和reducer对购物车state进行管理

一、创建一个reducer进行组件状态管理

二、在 contexts 中使用 useReducer 函数

引入reducer

使用useReducer，返回一个state和dispatch，接收参数reducer和初始状态值

```js
const [state, dispatch] = useReducer(reducer, initialState);
```


```js
const initialState = {
    cart: cartData,
    total: 0,
    amount: 0
}
```

最后，在`AppContext.Provider`的value中将 state和increase等方法导出去

三、页面函数绑定

为了更新屏幕内容，用户点击“增加”按钮，调用dispatch函数。将action type 和 商品id 传递过去

```js
const increase = (id) => {
    dispatch({ type: "INCREASE", goods: id });
}
```



React会将当前的state和action一起传递给reducer

reducer会判断当前函数是哪一个，然后进行对应的计算返回一个新的state，

React保存新的state，使用它渲染和更新UI

> 假设我们要对购物车内某个商品的数量进行增加，判断type是否等于increase，然后对当前购物车数组state.cart进行遍历，如果当前item===action.goodsId，就创建一个新的临时购物车数组，对当前子项的数量进行+1，最后函数结束返回新的state数据

```js
if(action.type==="INCREASE"){
    const cartTemp = state.cart.map(item => {
        if(item.id === action.goods){
            return { ...item, amount: item.amount + 1 };
        }
        return item
    })
    return {...state, cart: cartTemp}
}
```



#### 封装重复代码

对于单个商品的增减函数，可以封装成一个函数 toggleAmount 数量变化

创建一个临时购物车数组，通过state.cart进行处理得到的，最终返回新的state和cart数据

首先，判断当前子项的id是否等于action.goods.id，然后再判断action.goods.type是增加还是减少，从而对当前商品项的数量进行+1或者-1，最后使用filter过滤出数组不为0的商品

```js
  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.cargo.id) {
          if (action.cargo.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.cargo.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
```



计算总价和购物车总数量：

在reducer中：建立一个处理总数和总价格的函数 getTotal

使用reduce方法对state.cart数组进行处理，参数是cartTotal和cartItem对象，cartItem解构出当前商品的数量和价格，cartTotal包含总数量amount和总价total两个属性，总数量就是等于商品项的数量累加，总价就是商品单价*商品数量的累加

最后遍历完成后，再使用parseFloat和toFixed方法对总价进行小数格式化

然后将新的state,total, amount返回

```js
  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        amount: 0,
        total: 0,
      }
    );
    // 单独处理总价
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
```

在context里定义一个useEffect，每次购物车的cart数组发生变化时，计算total