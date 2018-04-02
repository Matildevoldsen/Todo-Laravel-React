import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Lists extends Component {
    render() {
        return(
            <ul className="list-group">
                <a href="#" className="list-group-item">
                    Cras justo odio
                    <span className="close" data-dismiss="alert" aria-label="Close"><span
                        aria-hidden="true">&times;</span></span>
                </a>
            </ul>
        );
    }
}