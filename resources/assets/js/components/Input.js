import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this);
    git}

    handleChange(e) {
        this.setState({input: e.target.value});
    }

    render() {
        return (
            <div className="input-group">

                <input onChange={this.handleChange} className="form-control" type="text" placeholder="Todo"/>
                <span className="input-group-btn">
                    <button onClick={this.props.storeData.bind(this, this.state.input)} className="btn btn-danger"
                            type="button">Add</button>
                </span>
            </div>
        );
    }
}

export default Input;