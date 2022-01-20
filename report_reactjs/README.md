# BÁO CÁO REACTJS

## I. Components

Có 2 loại components trong React là class components và function components.

### 1. Class components

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

**Mounting:**

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