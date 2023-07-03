import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: perform calculation here with mathjs
    };

  return (
    <div className="App">
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value="inputValue"
                onChange={handleInputChange}
                placeholder="enter an algebraic expression"
                />
                <button type="submit">Calculate</button>
            </form>
        </div>
    </div>

  );

};
export default App;
