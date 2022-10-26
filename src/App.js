import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {

  const[textValue,setTextValue]=React.useState(`# H1\n`+`## H2`+"\n[link](https://www.freecodecamp.org)"+`\n> Block Quotes!
  `+`![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`+`\n1. And there are numbered lists too.\n1. Use just 1s if you want! \n1.`+
  `\n**bold**`+"\n```js \nfunction var => { None }\n```"+"\n``` this is code ```")

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
          <textarea
                id="editor" 
                className='markDown'
                onChange={handleChange}
                name='text'
                value={textValue}
                placeholder="write here"
            />
        </div>
          <div className='rendText' id="preview">
          <ReactMarkdown>{textValue}</ReactMarkdown>
          </div>
      </main>
    </div>
  );
}
const Component = (value) => {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {value}
    </SyntaxHighlighter>
  );
};
export default App;
