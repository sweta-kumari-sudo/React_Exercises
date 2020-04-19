import React from 'react'

class Counter extends React.Component {
    
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        clickHandler = () => {
            this.setState( prevState => {
                return { count: prevState.count + 1}
            })
        }
        render() {
            return (
                <div>
                {this.props.render(this.state.count, this.clickHandler)}
                </div>
            )
        }
}

export default Counter