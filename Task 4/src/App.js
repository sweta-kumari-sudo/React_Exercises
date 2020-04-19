import React from 'react';
import logo from './logo.svg';
import './App.css';
import Beginning from './components/Beginning';
import Counters from './components/Counters'
// import Clickbutton from './components/Clickbutton'
// import Hover from './components/Hover'
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2'
// import Counter from './components/Counter'
 import ComponentA from './components/ComponentA'
import { UserProvider } from './components/Context';
 //import Parent from './components/Parent'

function App() {
  return (
    <div className="App">
      {/* < Counters/> */}

      {/* < Parent/> */}
      
      < ComponentA />
      
      
      {/* < Clickbutton n="Hello" />
      < Hover/> */}

      {/* <ClickCounter2/>
      < HoverCounter2 /> */}
      {/* <Counter render={(count, clickHandler)=> (<ClickCounter2 count={count} clickHandler={clickHandler} />
      )}
      />
       <Counter render={(count, clickHandler) => (<HoverCounter2 count={count} clickHandler={clickHandler}/>
      )} */}
      {/* /> */}
      </div>
  );
}

export default App;
