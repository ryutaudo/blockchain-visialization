import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

let data = [];

class SampleChart extends Component {
  render () {
    if (this.props.base === 'BTC' ) {
      data = bitcoin;
    } else if (this.props.base === 'ETH') {
      data = ether;
    } else {
      data = lightcoin
    }

    return (
      <LineChart width={1000} height={200} data={data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    )
  }
}

export default SampleChart;

const lightcoin = [
  { name: "01/05/2013", price: 4.29 },
  { name: "01/06/2013", price: 2.94 },
  { name: "01/07/2013", price: 3.01 },
  { name: "01/08/2013", price: 2.87 },
  { name: "01/09/2013", price: 2.59 },
  { name: "01/10/2013", price: 2.34 },
  { name: "01/11/2013", price: 2.34 },
  { name: "01/12/2013", price: 40.57 },
  { name: "01/01/2014", price: 24.35 },
  { name: "01/02/2014", price: 22.1 },
  { name: "01/03/2014", price: 13.23 },
  { name: "01/04/2014", price: 12.77 },
  { name: "01/05/2014", price: 10.93 },
  { name: "01/06/2014", price: 10.93 },
  { name: "01/07/2014", price: 8.96 },
  { name: "01/08/2014", price: 7.54 },
  { name: "01/09/2014", price: 4.86 },
  { name: "01/10/2014", price: 4.47 },
  { name: "01/11/2014", price: 3.76 },
  { name: "01/12/2014", price: 3.58 },
  { name: "01/01/2015", price: 2.72 },
  { name: "01/02/2015", price: 1.88 },
  { name: "01/03/2015", price: 1.85 },
  { name: "01/04/2015", price: 1.65 },
  { name: "01/05/2015", price: 1.44 },
  { name: "01/06/2015", price: 1.64 },
  { name: "01/07/2015", price: 4.09 },
  { name: "01/08/2015", price: 4.64 },
  { name: "01/09/2015", price: 2.85 },
  { name: "01/10/2015", price: 3.01 },
  { name: "01/11/2015", price: 3.82 },
  { name: "01/12/2015", price: 3.63 },
  { name: "01/01/2016", price: 3.48 },
  { name: "01/02/2016", price: 3.07 },
  { name: "01/03/2016", price: 3.45 },
  { name: "01/04/2016", price: 3.25 },
  { name: "01/05/2016", price: 3.66 },
  { name: "01/06/2016", price: 4.65 },
  { name: "01/07/2016", price: 4.19 },
  { name: "01/08/2016", price: 4.06 },
  { name: "01/09/2016", price: 3.8 },
  { name: "01/10/2016", price: 3.85 },
  { name: "01/11/2016", price: 4 },
  { name: "01/12/2016", price: 3.91 },
  { name: "01/01/2017", price: 4.33 },
  { name: "01/02/2017", price: 4.08 },
  { name: "01/03/2017", price: 3.77 },
  { name: "01/04/2017", price: 6.65 },
  { name: "01/05/2017", price: 15.71 },
  { name: "01/06/2017", price: 25.34 },
  { name: "01/07/2017", price: 40.4 },
  { name: "01/08/2017", price: 43.02 },
  { name: "01/09/2017", price: 70.86 },
  { name: "01/10/2017", price: 55.14 },
  { name: "01/11/2017", price: 55.74 }
];

const ether = [
  { name: '01/09/2015', price: 1.35 },
  { name: '01/10/2015', price: 0.734307 },
  { name: '01/11/2015', price: 0.920847 },
  { name: '01/12/2015', price: 0.878316 },
  { name: '01/01/2016', price: 0.933712 },
  { name: '01/02/2016', price: 2.32 },
  { name: '01/03/2016', price: 6.32 },
  { name: '01/04/2016', price: 11.4 },
  { name: '01/05/2016', price: 8.78 },
  { name: '01/06/2016', price: 14.11 },
  { name: '01/07/2016', price: 12.44 },
  { name: '01/08/2016', price: 11.89 },
  { name: '01/09/2016', price: 11.67 },
  { name: '01/10/2016', price: 13.2 },
  { name: '01/11/2016', price: 10.96 },
  { name: '01/12/2016', price: 8.6 },
  { name: '01/01/2017', price: 7.98 },
  { name: '01/02/2017', price: 10.74 },
  { name: '01/03/2017', price: 15.85 },
  { name: '01/04/2017', price: 50.03 },
  { name: '01/05/2017', price: 79.32 },
  { name: '01/06/2017', price: 230.89 },
  { name: '01/07/2017', price: 293.35 },
  { name: '01/08/2017', price: 204.69 },
  { name: '01/09/2017', price: 383.47 },
  { name: '01/10/2017', price: 301.55 },
  { name: '01/11/2017', price: 305.76 }
];


const bitcoin = [
  { name: '01/05/2013', price: 139 },
  { name: '01/06/2013', price: 128.81 },
  { name: '01/07/2013', price: 97.51 },
  { name: '01/08/2013', price: 106.21 },
  { name: '01/09/2013', price: 135.14 },
  { name: '01/10/2013', price: 132.68 },
  { name: '01/11/2013', price: 203.9 },
  { name: '01/12/2013', price: 1128.92 },
  { name: '01/01/2014', price: 754.97 },
  { name: '01/02/2014', price: 828.61 },
  { name: '01/03/2014', price: 549.92 },
  { name: '01/04/2014', price: 457 },
  { name: '01/05/2014', price: 447.63 },
  { name: '01/06/2014', price: 623.69 },
  { name: '01/07/2014', price: 641.39 },
  { name: '01/08/2014', price: 586.2 },
  { name: '01/09/2014', price: 477.79 },
  { name: '01/10/2014', price: 387.43 },
  { name: '01/11/2014', price: 338.65 },
  { name: '01/12/2014', price: 378.25 },
  { name: '01/01/2015', price: 320.44 },
  { name: '01/02/2015', price: 216.87 },
  { name: '01/03/2015', price: 254.28 },
  { name: '01/04/2015', price: 244.22 },
  { name: '01/05/2015', price: 235.94 },
  { name: '01/06/2015', price: 230.23 },
  { name: '01/07/2015', price: 263.35 },
  { name: '01/08/2015', price: 284.69 },
  { name: '01/09/2015', price: 230.26 },
  { name: '01/10/2015', price: 236 },
  { name: '01/11/2015', price: 315 },
  { name: '01/12/2015', price: 377.41 },
  { name: '01/01/2016', price: 430.72 },
  { name: '01/02/2016', price: 369.35 },
  { name: '01/03/2016', price: 437.92 },
  { name: '01/04/2016', price: 416.76 },
  { name: '01/05/2016', price: 448.48 },
  { name: '01/06/2016', price: 531.11 },
  { name: '01/07/2016', price: 672.51 },
  { name: '01/08/2016', price: 624.6 },
  { name: '01/09/2016', price: 575.55 },
  { name: '01/10/2016', price: 609.93 },
  { name: '01/11/2016', price: 701.34 },
  { name: '01/12/2016', price: 746.05 },
  { name: '01/01/2017', price: 963.66 },
  { name: '01/02/2017', price: 970.94 },
  { name: '01/03/2017', price: 1180.04 },
  { name: '01/04/2017', price: 1071.71 },
  { name: '01/05/2017', price: 1348.3 },
  { name: '01/06/2017', price: 2288.33 },
  { name: '01/07/2017', price: 2492.6 },
  { name: '01/08/2017', price: 2871.3 },
  { name: '01/09/2017', price: 4701.76 },
  { name: '01/10/2017', price: 4341.05 },
  { name: '01/11/2017', price: 6440.97 }
];