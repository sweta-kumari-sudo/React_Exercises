import React, { Component} from 'react'

class RegularComp extends Component {
    render() {
        console.log('Regular Component render')
        return(
            <div>
                Regular {this.props.name}
            </div>
        )
    }
}

export default RegularComp