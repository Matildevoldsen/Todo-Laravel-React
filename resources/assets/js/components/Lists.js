import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

class Lists extends Component {


    render() {
        return (
            <ul className="list-group">
                {this.props.todos.map((todo) =>
                    <a href="#" key={todo.id} className="list-group-item">
                        {todo.content}
                        <span className="close" data-dismiss="alert" aria-label="Close"><span
                            aria-hidden="true">&times;</span></span>
                    </a>
                )}
            </ul>
        );
    }
}

export default Lists;