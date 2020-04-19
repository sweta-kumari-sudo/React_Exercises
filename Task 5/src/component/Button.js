import React, { Component } from 'react';
import {
    EuiIcon
}from '@elastic/eui'

class Button extends Component {

    deleteRow = () => {
        // console.log(this.props.data)
        // //const {refer} = this.props
        // console.log(this.props)
        const index = this.props.rowIndex;
        this.props.deleteRef(index);
        //console.log(refer.gridApi)
        // const selectedData = this.props.gridApi.getSelectedRows();
        // this.props.gridApi.updateRowData({ remove: selectedData });

    }
    render() {
        return ( 
                <>
                <EuiIcon type="trash" onClick={this.deleteRow}/>
                </>
        )
    }
}
export default Button