import React, {Component} from 'react'

class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

        increment() {
            this.setState({
                counter: this.state.counter + 1
            })
        }

        render() {
            return(
                <div>
                    <h3>{this.state.counter}</h3>
                </div>
            )
        }
}

export default Child