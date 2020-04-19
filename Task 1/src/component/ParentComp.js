import React, {Component} from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'

class ParentComp extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name: 'Sweta'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Sweta'
            })
        },2000)
    }

    render(){
        console.log('Parent')
        return (
            <div>
                Parent
                <MemoComp name = {this.state.name}/>
                {/* <PureComp name={this.state.name}/>
                <RegularComp name = {this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp