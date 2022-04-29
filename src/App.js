import './reset.css'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [tab, setTab] = useState([0])
  
  return (
    <div className="App">
      <Header />
      { tab.length < 3 && 
        <button className='add-counter bg-purple color-white' onClick={()=> {
          const newTab = [...tab]
          console.log('new tab', newTab)
          newTab.push(0)
          setTab(newTab)
          }}>Add counter</button>
      }

        
      <main className='main-container'>
       
        <Counter tab={tab} setTab={setTab}/>
      </main>
      
      <Footer />
    
    </div>
  );
}

export default App;
