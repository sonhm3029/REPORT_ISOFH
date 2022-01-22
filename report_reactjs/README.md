# BÁO CÁO REACTJS

# I. Components

Có 2 loại components trong React là class components và function components.

## 1. Class components

Để tạo một class component:

```Javascript
import React from 'react'

class Title extends React.Component {
    render() {
        return (
            <h2>This is title</h2>
        )
    }
}

```

Đầu tiên, tên của component bắt buộc phải viết hoa chữ cái đầu, những chữ cái tiếp theo nên viết theo dạng camelCase. Class được tạo ra phải `extends` (kế thừa) `React.Component` để có thể truy cập được các `React.Component` function. Class Component thì yêu cầu phải có `render()` method, hàm này sẽ trả về HTML chính là element tạo ra.

Sử dụng class Component như sau:

```Javascript
const html = (
    <div>
        <Title />
        <p>Paragraph</p>
    </div>
)

...
```

#### Constructor của class Components

```Javascript
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
```

Trong React, constructor của class Component là nơi khởi tạo các `state` ban đầu của component. Các `state` này nên được lưu trong object là `state` như ví dụ trên.

Hàm super() dùng để thừa hưởng lại mọi thứ trong constructor functions của `React.Component`, qua đó component được tạo ra sẽ access được đến tất cả các functions của `React.Component`.

#### Class Components Props:

Một cách để handling components properties là sử dụng `props`. `props` ở đây được truyền vào components như parameter của function.

```Javascript
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'));


```

Nếu như Components có khai báo `constructor` thì `props` nên được truyền vào `constructor` và `super`

```Javascript
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));
```

Sau khi tạo một component thì component cũng giống như các HTML element cho nên ta có thể dùng component này trong component khác.

```Javascript
class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

Như đã nói từ phần ES6, ta phân chia code ra thành các module để dễ quản lý và tái sử dụng. Ta nên viết mỗi component vào một file riêng. Khi nào muốn sử dụng component ở đâu thì chỉ cần import vào mà không cần phải viết đi viết lại.

#### State của Class Components

React class components có sẵn một thuộc tính là `state` object là nơi để lưu trữ các trạng thái của component, khi `state` thay đổi thì component được re-renders. `state` object có thể có nhiều thuộc tính khác nhau.

```Javascript
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```

Để sử dụng các thuộc tính của state thì ta dùng `this.state.property`.

```Javascript
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}
```

Để update `state` của components thì ta sử dụng method `setState`

```Javascript
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
```

#### LifeCycle của Class component:

Vòng đời của các component trong react bao gồm:

- Mounting: Bắt đầu xuất hiện trong DOM
- Update: re-render trong DOM
- Unmouting: Gỡ khỏi DOM.

### **Mounting:**

React có 4 built-in methods được gọi theo thứ tự lần lượt như sau khi component được mount vào DOM:

1. `constructor()`
2. `getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

Trong đó `render()` luôn luôn được gọi (bắt buộc), còn các method khác sẽ được gọi nếu ta khai báo trong components.

- `constructor()`:

Đây là hàm được gọi đầu tiên nếu được định nghĩa, dùng để setup các `state` ban đầu của Component, nếu có `props` thì cần truyền `props` vào `contructor` và `super`

```Javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

- `getDerivedStateFromProps()`: update các state ban đầu với props của nó, hàm được gọi sau `constructor()` và ngay trước hàm `render()` (ngay trước khi component được render vào DOM). Hàm này nhận vào 2 tham số là `props` và `state` trả về object update `state`, trả về `null` khi không có update gì.

```Javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
```

Ví dụ trên update `state` của Component bằng `props` được truyền vào trước khi render cho nên khi render ra giá trị `favoritecoloor` sẽ là `yellow`.

- `render()`: Hàm render component hiển thị trên DOM.

- `componentDidMount()`

Hàm gọi ra ngay sau khi component được render vào DOM. Do đó thường sử dụng để thực hiện các các công việc mà cần có mặt component trong DOM hay call api...

```Javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

### **Updating**

Một component sẽ được update khi có `states` hay `props` nào của nó bị thay đổi.

Updating có 5 built-in function được gọi theo thứ tự sau khi component update:

1. `getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

Trong đó `render()` luôn luôn được gọi, các hàm còn lại là optional, sẽ được gọi nếu ta khai báo chúng.

- `getDerivedStateFromProps()`

Hàm này được gọi đầu tiên khi có `states` hay `props` của component bị thay đổi, cách hoạt động giống như hàm này ở phần mounting

```Javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
```

Khi nhấn button `Change color` dòng chữ `yellow` giữa nguyên vì hàm `static getDerivedStateFromProps` được gọi đầu tiên khi component update nên nó sẽ thay đổi lại từ `blue` về `yellow`.

- `shouldComponentUpdate()`

Hàm trả về boolean, `true` thì sẽ cho phép update và ngược lại.

```Javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

Khi ấn `change color` thì dòng `red` sẽ giữa nguyên vì hàm `shouldComponentUpdate()` trả về `false`, nếu ta sửa lại cho hàm trả về `true` thì `red` sẽ chuyền thành `blue`.

- `render()`

Hàm render lại Component sau khi đã được update.

- `getSnapshotBeforeUpdate()`

Trong hàm này, ta có thể truy cập đến `props` vs `state` của Component trước khi được update tức là kể cả sau khi `state` của Component đã được update r thì ta vẫn xem lại `state` trươc đó của nó được.

Chú ý rằng, phương thức này bắt buộc phải đi kèm với `componenDidUpdate()` nếu không sẽ có lỗi.

Ví dụ :

```Javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

Chương trình trên sẽ chạy như sau:

- Component được `mounted` vào DOM, kết quả hiển thị:

![1](1.png)

Sau khi được `mounted` vào DOM bằng `render`, hàm `componentDidMount` chạy và thực hiện `setTimeout`, sau 1s thì `state` của Component thay đổi.

Hai hàm `getDerivedStateFromProps()`, `shouldComponentUpdate()` không khai báo nên không được gọi nên hàm `render` sẽ được gọi luôn, khi đó t sẽ thấy dòng `My Favorite Color is yellow`. Sau khi đã được updated và render lại thì hàm `getSnapshotBeforeUpdate` được gọi hiển thị thông tin trong `#div1` và cuối cùng thì `componentDidUpdate` được gọi và hiển thị thông tin trong `#div2`

![2](2.png)

### **Unmounting**

Bỏ Component ra khỏi DOM. Phase này chỉ có duy nhất một hàm được thực hiện ngay trước khi Component được Unmounting khỏi DOM, hàm này thường dùng để remove các event, các hàm không cần thiết sử dụng nếu như không có mặt component trong DOM để tránh bị memory leak.

- `componentWillUnmount()`

**Ví dụ:**

```Javascript
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
```

Khi ấn nút xóa header thì `componentWillUnmount` sẽ được chạy hiển thị ra alert box, sau đó header mới được gỡ khỏi DOM.

Ngoài ra còn có phase handle error nếu trong quá trình làm việc với DOM của component gây ra lỗi

- `static getDerivedStateFromError()`
- `componentDidCatch()`.

## 2. Function Components

Khai báo một function component:

Cách đặt tên giống như class Component, chữ cái đầu tiên phải viết hoa. Function component đem lại những thuận tiện hơn so với class Component, xử lý state, prop, vòng đời với các hooks.

```Javascript
function Component1() {
  return (
    <h1>This is parahraph</h1>
  );
}

const Component2 = () => {
  return (
    <div>This is div</div>
  )
}
```

