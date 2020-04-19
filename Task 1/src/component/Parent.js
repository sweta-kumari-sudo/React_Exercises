import React, { Component} from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.increment()
    }

    render() {
        return (
            <div>
                <Child ref = {this.inputRef}/>
                <button onClick={this.clickHandler}>Count</button>
            </div>
        )
    }
}

export default Parent