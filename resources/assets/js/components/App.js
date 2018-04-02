import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Lists from "./Lists";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8004/items')
            .then(response => {
                this.setState({
                    todos: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    addItem() {

    }

    removeItem() {

    }

    render() {
        return (
            <div className="container">
                <br/>
                <h1 className="text-center">Todo List</h1>
                <hr/>

                <Lists
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
