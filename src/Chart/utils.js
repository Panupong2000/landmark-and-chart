const { timeParse } = require('d3-time-format');
const parseDate = timeParse("%Y.%m.%d%H:%M");
const getData = [];
require('../XAGUSD60.json').map(
	data=>{ 
		const bb = {
			date:parseDate(data.date+data.hr),
			open : data.open,
			high: data.high,
			low: data.low,
			close: data.close,
			volume: data.volume
		}
		//console.log("0",data)
		//console.log("1",bb)

		
		getData.push(bb);
	}
)

console.log("3",getData)
export default getData;

// let getData = [];
// csvtojson.getJsonFromCsv("XAGUSD60.csv").map(json=>{
//     const aa = json[Object.keys(json)[0]].split(',');
// 	const bb = { date:parseDate(aa[0]+aa[1]) , open:parseFloat(aa[2]) , high:parseFloat(aa[3]) , low:parseFloat(aa[4]) , close:parseFloat(aa[5]) , volume:parseFloat(aa[6]) }
// 	getData.push(bb);
// })
