import logo from './logo.svg';
import './App.css';
import {Greet, Greet2} from './components/Basic/Greet.js'
import Welcome from './components/Basic/Welcome.js'
import Message from './components/Basic/Message.js'
import Counter from './components/Basic/Counter';
import FunctionClick from './components/Basic/FunctionClick.js';
import ParentComponent from './components/Basic/ParentComponent.js';
import ConditionalRender from './components/Basic/ConditionalRender.js'
import ListRender, {NameRender} from './components/Basic/ListRender.js';
import Form from './components/Basic/Form.js';
import LifecycleA from './components/Basic/LifecycleA.js';
import FragmentDemo from './components/Basic/FragmentDemo.js';
import ParComp from './components/Basic/PureComponent/ParComp.js'
import RefsDemo from './components/Basic/Ref/RefsDemo.js';
import ParentFuncInput from './components/Basic/Ref/ParentFuncInput';
import ParentClassInput from './components/Basic/Ref/ParentClassInput';
import PortalDemo from './components/Basic/PortalDemo';
import Hero from './components/Basic/Hero';
import ErrorBoundary from './components/Basic/ErrorBoundary';
import ClickCounter from './components/Basic/HigherOrderComponent/ClickCounter';
import HoverCounter from './components/Basic/HigherOrderComponent/HoverCounter';
import ClickCounterTwo from './components/Basic/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/Basic/RenderProps/HoverCounterTwo';
import User from './components/Basic/RenderProps/User';
import CounterTwo from './components/Basic/RenderProps/CounterTwo';
import ComponentC from './components/Basic/Context/ComponentC';
import { UserProvider } from './components/Basic/Context/UserContext';


function App() {
  return (
    <div className="App">
      <div className='Basic'>
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
        {/* <ListRender />
        <NameRender /> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <FragmentDemo /> */}
        {/* <ParComp /> */}
        {/* <RefsDemo /> */}
        {/* <ParentClassInput /> */}
        {/* <ParentFuncInput /> */}
        {/* <PortalDemo /> */}
        {/* <ErrorBoundary>
          <Hero name='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name='Joker' />
        </ErrorBoundary> */}
        {/* <ClickCounter name='Hendry'/>
        <HoverCounter /> */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User name={(isLoggedIn) => {return isLoggedIn? 'Jack':'Collin'}}/> */}
        {/* <CounterTwo render={(count, increaseCount) => { return (<ClickCounterTwo count={count} increaseCount={increaseCount} />)}} />
        <CounterTwo render={(count, increaseCount) => { return (<HoverCounterTwo count={count} increaseCount={increaseCount} />)}} /> */}
        <UserProvider value='Bruce'>
          <ComponentC />
        </UserProvider>

      </div>
    </div>
  );
}

export default App;
