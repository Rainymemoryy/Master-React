import React, { Component } from 'react'

export default class ClassInput extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <input {...this.props}></input>
            </div>
        )
    }
}
