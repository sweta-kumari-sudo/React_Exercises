import React, {Component} from 'react'

class Beginning extends Component {
    constructor(props) {
        super(props)  

        this.state = {
            counter: 0,
            tags: ['tag1' , 'tag2' , 'tag3']
        }
    }

    handleIncrement = () => {

        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
        console.log(this.state.counter)
       // this.setState({ counter: this.state.counter + 1})
       //this.setState({ counter: this.state.counter + 1})

    }

    incrementby2 = () => {
        this.handleIncrement();
        this.handleIncrement();
    }

    format = () => {
        const h1 = <h4>Zero</h4>
        return this.state.counter === 0 ? h1 : this.state.counter
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += (this.state.counter === 0 ? "warning" : "primary")
        return classes
    }

    renderTags() {
        if (this.state.tags.length === 0)
        return <h3>There are no Tags!!</h3>

        return(
            <ul>{this.state.tags.map(tag => 
                <li key={tag}>{tag}</li>
            )}</ul>
        )
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.format()}</span>
                <button className="button btn-secondary btn-sm" onClick={this.incrementby2}>Increment</button>
                {this.state.tags.length === 0 && <h3>Please add some tags here</h3>}
                {this.renderTags()}
            </div>
        )
    }

    
}

 export default Beginning