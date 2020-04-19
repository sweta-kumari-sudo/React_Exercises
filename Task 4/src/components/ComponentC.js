import React from 'react'
import { UserConsumer } from './Context'


class ComponentC extends React.Component {
    render() {
        return (
            <UserConsumer>
               { (data, clickhandler) => (
                   <div>
                   <h3>Hello {data.count}</h3> 
                   <button onClick={clickhandler}>Count</button>
                   </div>
               )
               }
            </UserConsumer>
        )
    }
}

export default ComponentC