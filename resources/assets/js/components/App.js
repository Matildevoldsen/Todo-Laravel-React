import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Lists from "./Lists";
import axios from "axios/index";
import Input from "./Input";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    removeItem(id) {
        const uri = `http://127.0.0.1:8004/items/destroy/${id}`;
        axios.delete(uri);
    }

    componentDidMount() {
        setInterval(() => {
            axios.get('http://127.0.0.1:8004/items')
                .then(response => {
                    this.setState({
                        todos: response.data
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }), 1000;
    }

    addItem(e) {
        const products = {
            content: e,
        }
        let uri = 'http://127.0.0.1:8004/items/store';
        axios.post(uri, products).then((response) => {
            // browserHistory.push('/display-item');
        });
    }

    render() {
        return (
            <div className="container">
                <br/>
                <h1 className="text-center">Todo List</h1>
                <hr/>
                <Input
                storeData={this.addItem}
                />
                <br />
                <Lists
                    removeItem={this.removeItem.bind(this)}
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
