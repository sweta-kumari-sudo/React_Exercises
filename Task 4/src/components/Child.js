import React, {Component} from 'react'
import Subchild from './Subchild'

function Child(props) {
    return(
        
        <div>
            <Subchild name = {props.name}/>
        </div>
    )
}
export default Child