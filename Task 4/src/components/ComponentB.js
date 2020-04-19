import React from 'react'
import ComponentC from './ComponentC'
//import UserContext from './Context'

class ComponentB extends React.Component {
    render() {
        return (
            <div>
                <h2>Sweta</h2>
                {/* This is ComponentB {this.context} */}
            <ComponentC />
            </div>
        )
    }
}

// ComponentB.contextType = UserContext

export default ComponentB