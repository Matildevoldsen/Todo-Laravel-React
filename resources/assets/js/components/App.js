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
        this.setState({todos: ['hi', 'p']});
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
                removeItem={this.removeItem()}
                />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
