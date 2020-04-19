import React, { Component} from 'react'

class ClickCounter2 extends Component {
    

    render() {
        const { count,clickHandler} = this.props
    return <button onClick={clickHandler}> Clicked {count} times</button>
        
    }
}

export default ClickCounter2