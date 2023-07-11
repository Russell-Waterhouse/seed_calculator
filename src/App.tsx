import React, {useState, MouseEventHandler } from 'react';
import './App.css';
import { SubmitButton } from './components/SubmitButton' 



const App: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    //TODO: 
    //1. Create a seed component (row that shows what has been entered, allows editing)
    //2. Create a mixture input component
    //3. Create a mixture output component

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(event.target.value);
    };

    const handleSubmit: MouseEventHandler = (_) => {
        console.log("I know you pressed the button");
        // TODO: perform calculation here with mathjs
    };

  return (
    <div className="App">
        <div>
            <form>
                <input
                type="text"
                value="inputValue"
                onChange={handleInputChange}
                placeholder="enter an algebraic expression"
                />
                <button type="submit">Calculate</button>
                <br />
                <SubmitButton onClick={handleSubmit} />
            </form>
        </div>
    </div>
  );
};

export default App;
