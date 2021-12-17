import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'this is a footer',
            number: 0
        }
        console.log(props.data.lastName)
        // this.click = this.click.bind(this)
    }

    click = () => {
        this.setState(pre => ({ number: pre.number + 4 }))
    }
    render() {
        return (
            <footer>
                <button onClick={this.click}>Click {this.state.number}</button>
                {this.props.name}
            </footer>
        )
    }
}

Footer.propTypes = {
    name: PropTypes.string,
    data: PropTypes.object,
    age: PropTypes.number
}
