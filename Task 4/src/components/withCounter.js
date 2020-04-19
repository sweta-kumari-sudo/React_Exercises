import React from 'react'

const UpdatedComponent = (OriginalComponent, countNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        clickHandler = () => {
            this.setState( prevState => {
                return { count: prevState.count + countNumber}
            })
        }
        render() {
            return (
            <OriginalComponent name="Sweta" 
            count={this.state.count} 
            clickHandler={this.clickHandler} 
            {...this.props}
            />
            )
        }
    }

    return NewComponent
}

export default UpdatedComponent