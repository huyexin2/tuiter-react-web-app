import './App.css';
import Assignment3 from "./labs/a3";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter/index"

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <h1> Welcome to Web Dev</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
//     return (
//         <div className="container">
//             <HelloWorld/>
//             <Assignment3/>
//             <Tuiter/>
//         </div>
//
//     );
// }
export default App;
