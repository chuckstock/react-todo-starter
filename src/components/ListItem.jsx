import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <li key={item.text}>{item.text}</li>
        )
    }
}