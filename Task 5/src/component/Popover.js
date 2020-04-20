import React, { Component } from 'react';
import { EuiPopover, EuiButton, EuiButtonToggle } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';
import { EuiFormRow } from '@elastic/eui';


  class Action extends Component {
    constructor(props) {
      super(props)
      this.state = {
        setIsPopoverOpen: false,
        toggle0On: []

        //toggle1On: this.props.column.visibility

       // button: <EuiButton iconType="gear" iconSide="right" onClick={this.onButtonClick} ></EuiButton>
      }
    }
    

onButtonClick = () => {
  // console.log(this.state.toggle0On)
  // console.log(this.state.toggle0On.length)

  // console.log(this.state.setIsPopoverOpen)
  // console.log(this.props)
  // console.log(typeof this.props)
  // console.log(this.props.column.length)
  // let a = this.state.toggle0On
  // console.log(a)
  // const arr = []
  //   const value = true
  //   for(let i=0;i<this.props.column.length;i++) {
  //     arr.push(value)
  //   }
  //   let b = arr;
  //   console.log(b)
  //   console.log(arr)
  //   console.log(arr[3])
  //console.log(Object.keys(this.props))
 this.setState({
   setIsPopoverOpen: !this.state.setIsPopoverOpen
})
console.log(this.state.setIsPopoverOpen)
  }

  closePopover = () => {
    this.setState({
      setIsPopoverOpen: false
      // toggle0On: true    
    })
  }

  onToggleChange = (i,field,flag) => {
    console.log(this.state.toggle0On)
    console.log(i)
    console.log(typeof i)
    console.log(typeof this.state.toggle0On)
    let arr = this.state.toggle0On
    if(arr[i] === true){
    flag = false;
    arr[i] = false
    } else {
    if(arr[i] === false) {
    flag = true;
    arr[i] = true
    }
  }
    this.setState({
        toggle0On: arr
      })
      console.log(this.state.toggle0On)
      this.props.visibility(field,flag)
   }


  componentDidMount = () => {
    const arr = []
    const value = true
    for(let i=0;i<this.props.column.length;i++) {
      arr.push(value)
    }
    this.setState({
      toggle0On: [...this.state.toggle0On, ...arr]
    })
  }

render() {
  
  return(
    
    <EuiFlexItem grow={false}>
    <EuiPopover
    button = {<EuiButton iconType="gear" iconSide="right" onClick={this.onButtonClick} ></EuiButton>}
    isOpen=  {this.state.setIsPopoverOpen}
    closePopover={this.closePopover}
    anchorPosition="upLeft">

    {this.props.column.map((col,index) => { 
      const a = this.state.toggle0On
      //this.state.toggle0On[index] = true
       return( 
         <div key={index}> 
        <EuiFormRow>
        <EuiButtonToggle 
        label= {col.headerName}
        iconType={a[index] ? 'eye' : 'eyeClosed'}
        onChange={() => this.onToggleChange(index,col.field)}
        //isSelected={this.state.toggleOn}
      />
      </EuiFormRow>
     </div>
     ) 
   }) 
 } 
    </EuiPopover>
    </EuiFlexItem>
  )
}
  }
  export default Action


