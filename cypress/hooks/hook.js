// const report = require('multiple-cucumber-html-reporter');

// const reportFunc = () => {
//     report.generate({
//         jsonDir: '../report/cucumber-json',
//         reportPath: '../report/html',
//         openReportInBrowser: true,
//         saveCollectedJSON: true,
//         disableLog: false,
//         metadata:{
//             browser: {
//                 name: 'chrome',
//                 version: '60'
//             },
//             device: 'Local test machine',
//             platform: {
//                 name: 'mac os x',
//                 version: '10.15.6'
//             }
//         },
//         customData: {
//             title: 'Report Information',
//             data: [
//                 {label: 'Project', value: 'Checkout Transaction Pillow'},
//                 {label: 'Release', value: '1.0.0'},
//                 {label: 'Cycle', value: '1'},
//                 {label: 'Execution Start Time', value: new Date(Date.now()).toLocaleString()},
//                 {label: 'Execution End Time', value: new Date(Date.now()).toLocaleString()}
//             ]
//         }
//     });
// };

// module.exports = {
//     reportFunc
// }