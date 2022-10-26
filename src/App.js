import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function App() {

  

  const[textValue,setTextValue]=React.useState("");

  function handleChange(event){
    setTextValue(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mark Down Preview</h1>
      </header>
      <main className='main'>        
       <div>
          <textarea className='markDown'
                onChange={handleChange}
                name='text'
                value={textValue}
                placeholder="write here"
            />
        </div>
          <div className='rendText'>
          <ReactMarkdown>{textValue}</ReactMarkdown>
          </div>
      </main>
    </div>
  );
}

export default App;
