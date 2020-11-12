import { render } from '@testing-library/react';
import React from 'react';
const { timeParse } = require('d3-time-format');
 const parseDate = timeParse("%m/%d/%Y%H:%M");
export default class list1 extends React.Component{
    constructor(props){
        super(props)
    }
        render(){
            return(
                <div>

                </div>
            )
        }
    
}