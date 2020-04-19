import React, { Component} from 'react'
import UpdatedComponent from './withCounter'

class Clickbutton extends Component {

    render() {
        const { count, clickHandler } = this.props
    return <button onClick={clickHandler}>{this.props.name} {this.props.n} Clicked {count} times</button>
        
    }
}

export default UpdatedComponent(Clickbutton,5)