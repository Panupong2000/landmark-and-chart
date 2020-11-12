import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";
import dayjs from 'dayjs';
let csvData = require('./XAGUSD60.json');

class Charts extends Component {
        constructor(props) {
          super(props);
          this.state = {
            series: [{
              data: [{}]
            }],
            options: {
              chart: {
                height: 500,
                type: 'candlestick',
              },
              title: {
                text: 'Project CSV Data eiei',
                align: 'left'
              },
              annotations: {
                xaxis: [
                  {
                    x: 'category',
                    borderColor: '#00E396',
                    label: {
                      borderColor: '#00E396',
                      style: {
                        fontSize: '12px',
                        color: '#fff',
                        background: '#00E396'
                      },
                      orientation: 'horizontal',
                      offsetY: 7,
                      text: 'Annotation Test'
                    }
                  }
                ]
              },
              tooltip: {
                enabled: true,
              },
              xaxis: {
                type: 'category',
                labels: {
                  formatter: function(val) {
                    return dayjs(val).format('MMM DD HH:mm')
                  }
                }
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              }
            },
          };
        }
        
        set_12Hours = () => {
          this.setState({
            series:[{
                data:[{}]
            }]
          })
          var temp12hr =[];
          var open_N;
          var maxHigh;
          var minLow;
            for(let i=0;i<csvData.length;i++){
              var tempdate = csvData[i].date;
              tempdate = tempdate.split(".");
              var temphr = csvData[i].hr;
              temphr = temphr.split(":");
              var tempX = new Date(tempdate[0],tempdate[1]-1,tempdate[2],temphr[0],temphr[1]);
              if(i != 0){
                if(i %12 == 0){
                  var tempXY = {x:tempX,y:[open_N,maxHigh,minLow,csvData[i-1].close]}
                  temp12hr.push(tempXY);
                  open_N = csvData[i].open;
                  maxHigh = csvData[i].high;
                  minLow = csvData[i].low;
                }
                else{
                  if(csvData[i].high > maxHigh){
                    maxHigh = csvData[i].high;
                  }
                  if(csvData[i].low < minLow){
                    minLow = csvData[i].low;
                  }
                }
              }
              else if(i == 0){
                open_N = csvData[i].open;
                maxHigh = csvData[i].high;
                minLow = csvData[i].low;
              }
            }
            this.setState({
              series:[{data:temp12hr}]
          })
        }

        set_6Hours = () => {
          this.setState({
            series:[{
                data:[{}]
            }]
          })
          var temp6hr =[];
          var open_N;
          var maxHigh;
          var minLow;
            for(let i=0;i<csvData.length;i++){
              var tempdate = csvData[i].date;
              tempdate = tempdate.split(".");
              var temphr = csvData[i].hr;
              temphr = temphr.split(":");
              var tempX = new Date(tempdate[0],tempdate[1]-1,tempdate[2],temphr[0],temphr[1]);
              if(i != 0){
                if(i %6 == 0){
                  var tempXY = {x:tempX,y:[open_N,maxHigh,minLow,csvData[i-1].close]}
                  temp6hr.push(tempXY);
                  open_N = csvData[i].open;
                  maxHigh = csvData[i].high;
                  minLow = csvData[i].low;
                }
                else{
                  if(csvData[i].high > maxHigh){
                    maxHigh = csvData[i].high;
                  }
                  if(csvData[i].low < minLow){
                    minLow = csvData[i].low;
                  }
                }
              }
              else if(i == 0){
                open_N = csvData[i].open;
                maxHigh = csvData[i].high;
                minLow = csvData[i].low;
              }
            }
            this.setState({
              series:[{data:temp6hr}]
          })
        }

        set_7day = () =>{
          this.setState({
            series:[{
                data:[{}]
            }]
          })
          var temp7D =[];
          var open_N;
          var maxHigh;
          var minLow;
            for(let i=0;i<csvData.length;i++){
              var tempdate = csvData[i].date;
              tempdate = tempdate.split(".");
              var temphr = csvData[i].hr;
              temphr = temphr.split(":");
              var tempX = new Date(tempdate[0],tempdate[1]-1,tempdate[2],temphr[0],temphr[1]);
              if(i != 0){
                if(i %168 == 0){
                  var tempXY = {x:tempX,y:[open_N,maxHigh,minLow,csvData[i-1].close]}
                  temp7D.push(tempXY);
                  open_N = csvData[i].open;
                  maxHigh = csvData[i].high;
                  minLow = csvData[i].low;
                }
                else{
                  if(csvData[i].high > maxHigh){
                    maxHigh = csvData[i].high;
                  }
                  if(csvData[i].low < minLow){
                    minLow = csvData[i].low;
                  }
                }
              }
              else if(i == 0){
                open_N = csvData[i].open;
                maxHigh = csvData[i].high;
                minLow = csvData[i].low;
              }
            }
            this.setState({
              series:[{data:temp7D}]
          })
        }

        set_14day = () =>{
          this.setState({
            series:[{
                data:[{}]
            }]
          })
          var temp14D =[];
          var open_N;
          var maxHigh;
          var minLow;
            for(let i=0;i<csvData.length;i++){
              var tempdate = csvData[i].date;
              tempdate = tempdate.split(".");
              var temphr = csvData[i].hr;
              temphr = temphr.split(":");
              var tempX = new Date(tempdate[0],tempdate[1]-1,tempdate[2],temphr[0],temphr[1]);
              if(i != 0){
                if(i %336 == 0){
                  var tempXY = {x:tempX,y:[open_N,maxHigh,minLow,csvData[i-1].close]}
                  temp14D.push(tempXY);
                  open_N = csvData[i].open;
                  maxHigh = csvData[i].high;
                  minLow = csvData[i].low;
                }
                else{
                  if(csvData[i].high > maxHigh){
                    maxHigh = csvData[i].high;
                  }
                  if(csvData[i].low < minLow){
                    minLow = csvData[i].low;
                  }
                }
              }
              else if(i == 0){
                open_N = csvData[i].open;
                maxHigh = csvData[i].high;
                minLow = csvData[i].low;
              }
            }
            this.setState({
              series:[{data:temp14D}]
          })
      }

        setGraph = () =>{
            this.setState({
                series:[{
                    data:[{}]
                }]
            })
            var tempArray = [];
            for(let i=0;i<csvData.length;i++){
                var tempdate = csvData[i].date;
                tempdate = tempdate.split(".");
                var temphr = csvData[i].hr;
                temphr = temphr.split(":");
                var tempX = new Date(tempdate[0],tempdate[1]-1,tempdate[2],temphr[0],temphr[1]);
                var tempY = [csvData[i].open,csvData[i].high,csvData[i].low,csvData[i].close];
                var tempXY ={x:tempX,y:tempY};
                tempArray.push(tempXY);
            }
            this.setState({
                series:[{data:tempArray}]
            })
        }

        componentWillMount(){
          this.setGraph();
        }

        render() {
          return (
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
            <button onClick={this.set_7day}>7 Day</button>
            <button onClick={this.set_14day}>14 Day</button>
            <button onClick={this.set_6Hours}>6 HR</button>
            <button onClick={this.set_12Hours}>12 HR</button>
        </div>
    

          );
        }
}
export default Charts;