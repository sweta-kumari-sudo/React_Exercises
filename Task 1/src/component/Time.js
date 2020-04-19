import React, { Component } from 'react'

class Time extends Component{
    constructor(props) {
    super(props)

    this.state = {
        time: new Date().toLocaleString()
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <div>
               <h3> Today's Date and time is: {this.state.time}</h3>
            </div>
        )
    }
}

export default Time

