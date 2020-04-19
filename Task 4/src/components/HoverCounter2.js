import React, { Component} from 'react'

class HoverCounter2 extends Component {
    

    render() {
        const { count, clickHandler} = this.props
    return <h2 onMouseOver={clickHandler}> Clicked {count} times</h2>
        
    }
}

export default HoverCounter2