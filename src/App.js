import React from 'react';

const welcome = {
    greeting: "Hey",
    title: "React"
}

function getTittle(title) {
    return title;
}

function App() {
    return (
        <div className="App">
            <h1>{welcome.greeting} {getTittle(welcome.title)}</h1>
            <label htmlFor="search">Search</label>
            <input id="search" type="text"/>
        </div>
    );
}

export default App;
