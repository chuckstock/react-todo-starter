import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
    renderList() {
        if (!this.props.items.length) {
            return <h4>Add a todo to get started</h4>
        }

        return this.props.items.map((item) => {
            return <ListItem key={item.text} item={item} />
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}