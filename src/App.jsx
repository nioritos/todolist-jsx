import { useState } from 'react'
import './App.css';
import Thing from './components/Thing';


function App() {
  const [hasThing, setHasThing] = useState('');
  const [listOfThings, setListOfThings] = useState([]);

  function onChangeHandler(e) {
    setHasThing(e.target.value);
  }

  function addThing() {
   if(!hasThing) {
    alert('hey bro, type your taskname if wanna add a task')
   }else {
    setListOfThings([...listOfThings, {text: hasThing, complete: false, id: Math.random() * 1000}]);
    document.querySelector('.new-task').value = '';
   }
  }


  return (
    <div className="App">
      <header>
        <h1>THINGS TO DO</h1>
        <div>
        <input type="text" name="" id="" onChange={onChangeHandler} className="new-task" placeholder='Add your thing name here!' />
        <button onClick={addThing}><strong>+</strong></button>
        </div>
      </header>

      <main className="container">
        <div className="things-area">
          {
            listOfThings ? listOfThings.map((param) => {
              return (
               <Thing 
               setListOfThings={setListOfThings}
               listOfThings={listOfThings} 
               text={param.text} key={param.id} 
               thing={param} 
               isComplete={param.complete}/>
              )
            }) : <p style={{color: '#000'}}>your tasks will display here!</p>
            
          }
        </div>
      </main>
    </div>
  )
}

export default App
