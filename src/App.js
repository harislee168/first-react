import logo from './logo.svg';
import './App.css';
import {Greet, Greet2} from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Message from './components/Message.js'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick.js';
import ParentComponent from './components/ParentComponent.js';
import ConditionalRender from './components/ConditionalRender.js'
import ListRender from './components/ListRender.js';

function App() {
  return (
    <div className="App">
      {/* <Greet fname="Bruce" lname="Clark">
        <p>This is children property</p>
      </Greet>
      <Greet fname="Diana" lname="Lee" />
      <Greet2 fname="Combo" lname="Dust" />
      <Welcome fname='Chun' lname='Li' />
      <Welcome fname='Ken' lname='Ryu'>
        <p>This is second children property</p>
      </Welcome> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRender /> */}
      <ListRender />
    </div>
  );
}

export default App;
