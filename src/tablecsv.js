import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';
//import Column from 'antd/lib/table/Column';
import ChartComponent from './Chart/ChartComponent';  
import Demo from './tree';
 const { timeParse } = require('d3-time-format');
 const parseDate = timeParse("%m/%d/%Y%H:%M");
 

 const getData = [];  

function App1() {

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [getdata , setgetdata] = useState([])

  // process CSV data
  const processData = dataString => {
   // console.log("1",dataString)
    const dataStringLines = dataString.split(/\r\n|\n/);
    //console.log("2",dataStringLines)
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    ///console.log("3",headers)

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }

      console.log("4",list)
        list.map(data=>{ 
          data.date = data.date+'20';
          //console.log("12",data.date)
            const bb = {
                date:parseDate(data.date+data.hr),
                open : data.open,
                high: data.high,
                low: data.low,
                close: data.close,
                volume: data.volume
            }
           //console.log("0",bb)
            getData.push(bb);
        }
    )
    console.log("1",getData)

    // prepare columns list from headers
    const columns = headers.map(c => ({
      name: c,
      selector: c,
    }));

    setData(list);
    setColumns(columns);
    setgetdata(getData);
    //console.log("23",data)
    //console.log("24",getdata)
  }

  //console.log("3",data)
  //console.log("4",columns)

  // handle file upload
  const handleFileUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  }


  return (
    <div>
      
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
      />
      <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
      />
      {(getdata)?<ChartComponent data1 = {getdata}/>:null}

    </div>
  );
}


export default App1;