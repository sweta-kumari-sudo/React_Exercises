import React, {Component} from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)

        state = {
            name: 'Sweta'
        }
    }
    

    render() {
        return (
            <Child name={this.state.value}/>
        )
    }
}

export default Parent