import React, {Component} from 'react'
import UpdatedComponent from './withCounter'

class Hover extends Component {

    render() {
        const {count, clickHandler } = this.props
        return (
        <div>
            <h2 onMouseOver={clickHandler}>{this.props.name} Hovered {count} times</h2>
        </div>
        )
    }
}

export default UpdatedComponent(Hover, 10)