import React from 'react';

const welcome = {
    greeting: "Hey",
    title: "React"
}

function getTittle(title) {
    return title;
}

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

function App() {
    return (
        <div className="App">
            <h1>{welcome.greeting} {getTittle(welcome.title)}</h1>
            <label htmlFor="search">Search</label>
            <input id="search" type="text"/>

            <hr />

            {/* render the list here */}
            {
                list.map(item => {
                    return (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span>{item.points}</span>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default App;
