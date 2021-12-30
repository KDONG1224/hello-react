import { Component } from "react";

// import MyComponent from "./MyComponent"

// const App = () => {
//   return (
//     <MyComponent name="KDONG" favoriteNumber={1}>
//       크동
//     </MyComponent>
//   );
// }

// export default App;

// import Counter from "./Counter"

// const App = () => {
//   return <Counter />;
// }

// export default App;

// import Say from "./Say";

// const App = () => {
//   return <Say />;
// }

// export default App;

// import EventPractice from "./EventPractice";

// const App = () => {
//   return <EventPractice />;
// }

// export default App;


// import ValidationSample from "./ValidationSample";

// const App = () => {
//   return <ValidationSample />;
// }

// export default App;

// class App extends Component {
//   render() {
//     return (
//       <ValidationSample />
//     )
//   }
// }

// export default App;

// import ScrollBox from './ScrollBox';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => this.scrollBox=ref}/>
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// import IterationSample from "./InterationSample";

// class App extends Component {
//   render() {
//     return (
//       <IterationSample />
//     );
//   }
// }

// export default App;

import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {

  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;