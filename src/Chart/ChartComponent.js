import React from 'react';
import Chart from './Chart';
import  getData  from "./utils";
import 'antd/dist/antd.css';
import MakeTimeFrame from './TimeFrame'
//import App1 from '../tablecsv'
import { Select } from 'antd';

const { Option } = Select;
let arr = undefined;
export default class ChartComponent extends React.Component {
	constructor(props){
		super(props)
		this.vvv = ['1h','3h','5h','1d','3d']
		this.time = {'1h':1,'3h':3,'5h':5,'1d':24,'3d':72}
		this.state = {value:'1h',data : new MakeTimeFrame(getData)}
		arr = this.state.data.data
	}

	onClick=(value)=>{
		console.log("123",this.props.data1)
		if(value === '1h'){
			arr = this.state.data.data;
		}else{
			arr =  this.state.data.changetoHour(this.time[value])
		}
		this.setState({value});
	}
	// shouldComponentUpdate(r,nextState){
	// 	return true;
	// }
	render() {
		if (arr === undefined) {
			return <div>Loading...</div>
		}
		//console.log('render')
		return (
			<div>
			<Select defaultValue= "1h" style={{ width: 120 }} onChange={this.onClick}>
      			<Option value="1h">1h</Option>
      			<Option value="3h">3h</Option>
      			<Option value="5h">5h</Option>
				<Option value="1d">1d</Option>
				<Option value="3d">3d</Option>
			</Select>
			<Chart data={arr} value = {this.state.value}/>
			</div>
		)
	}
}
