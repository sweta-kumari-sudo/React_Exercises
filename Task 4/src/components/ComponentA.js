import React from 'react'
import ComponentB from './ComponentB'
import { UserProvider } from './Context';


class ComponentA extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            
        }
    }

    
    
    render() {
        return (
            <div>
                <h1>Sweta</h1>
            <UserProvider value={{
                data: this.state.count,
                clickHandler: () => {
                  this.setState( 
                       { count: this.state.count + 1}
                  )
              }
              }}
              >
                  
                  {this.props.children}
            </UserProvider>
            {/* <ComponentB /> */}
            </div>


        )
    }
}

export default ComponentA