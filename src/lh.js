// Imports lighthouse module to be able to use it in the code
const lighthouse = require('lighthouse');
// Imports Chrome Launcher module to be able to launch chrome which lighthouse needs to luach chrome itself to carry out/ audit the run
const chromeLauncher = require('chrome-launcher');
// const argv = require('yargs').argv;
// const url = argv.url;
const url = require('url');
const fs = require('fs');
//imports the glob dependency that allows dor pattern matching when searching for files
const glob = require('glob');
const path = require('path');

launchChromeAndRunLighthouse('https://spinbot.com/');
export const launchChromeAndRunLighthouse = (url) => {
  console.log(url);
  let resultsJSON;
  // step one: opem chrome using chrome launcher and pass it the url
  // This launch function returns a promise so it ill either be fulfilled or rejected.
  return chromeLauncher.launch().then((chrome) => {
    // chrome is a chrome object of the webpage that was launched
    console.log(chrome);
    //once the chrome page is launched the url is passed into the lighthouse function that starts the audit of the website entered
    const opts = {
      // These are the option arguments that are passed with the url
      port: chrome.port, // identifying the port by access the chrome object port the website is open on. This port links the lighthouse instance with the chrome browswer
    };
    return lighthouse(url, opts).then(results => {
    // kills the chrome window closing it
    return chrome.kill().then(() => {
    return {
      js: results.lhr,
      json: results.report
    };
  });
  resultsJSON = results.report;
});
// logs report from results to the console
      console.log(resultsJSON);
    });
};


// const getContents = pathStr => {
//   const output = fs.readFileSync(pathStr, "utf8", (err, results) => {
//     return results;
//   });
//   return JSON.parse(output);
// };
//
// const compareReports = (from, to) => {
//   const metricFilter = [
//     "first-contentful-paint",
//     "first-meaningful-paint",
//     "speed-index",
//     "estimated-input-latency",
//     "total-blocking-time",
//     "max-potential-fid",
//     "time-to-first-byte",
//     "first-cpu-idle",
//     "interactive"
//   ];
//
//   for (let auditObj in from["audits"]) {
//     if(metricFilter.includes(auditObj)) {
//       const percentageDiff = calcPercentageDiff(
//       from["audits"][auditObj].numericValue,
//       to["audits"][auditObj].numericValue
//       );
//
//       let logColor = "\x1b[37m";
//       const log = (() => {
//         if (Math.sign(percentageDiff) === 1) {
//           logColor = "\x1b[31m";
//           return `${percentageDiff + "%"} slower`;
//         } else if (Math.sign(percentageDiff) === 0) {
//           return "unchanged";
//         } else {
//           logColor ="\x1b[32m";
//           return `${percentageDiff + "%"} faster`;
//         }
//       })();
//       console.log(logColor, `${from["audits"][auditObj].title} is ${log}`)
//     }
//   }
// };
//
// //calculates the percentage difference between two reports on respective metrics
// const calcPercentageDiff = (from, to) => {
//   const per = ((to - from) / from) * 100;
//   return Math.round(per * 100) / 100;
// };
//
// //checks to see if the user has passed a from and to oath
// if (argv.from && argv.to) {
//   compareReports(
//     getContents(argv.from + ".json"),
//     getContents(argv.to + ".json")
//   );
// //checks to see if the user has passed a URL
// } else if (argv.url) {
//   const urlObj = new URL(argv.url);
//   let dirName = urlObj.host.replace("www.", "");
//   if (urlObj.pathname !== "/") {
//     dirName = dirName + urlObj.pathname.replace(/\//g, "_");
//   }
//   if(!fs.existsSync(dirName)) {
//     fs.mkdirSync(dirName);
//   }
//   launchChromeAndRunLighthouse(argv.url).then((results) => {
//     const prevReports = glob(`${dirName}/*.json`, {
//       sync: true
//     });
// //gets a list of all timestamp file names
//     if (prevReports.length){
//       dates = [];
//       for (report in prevReports) {
//         dates.push(
//           new Date(path.parse(prevReports[report]).name.replace(/_/g, ":")));
//       }
//       //reduces array down until only the most recent remains
//       const max = dates.reduce(function(a, b) {
//         return Math.max(a, b);
//       });
//       const recentReport = new Date(max).toISOString();
//       //gets the most recent report and returns it
//       const recentReportContents = getContents(dirName + '/' + recentReport.replace(/:/g, '_') + '.json');
//       compareReports(recentReportContents, results.js);
//     }
//     //saves json file to directory
//     fs.writeFile(`${dirName}/${results.js["fetchTime"].replace(/:/g, "_")}.json`,
//     results.json, err => {
//     if (err) throw err;
//   });
// });
// } else {
//   throw "You haven't passed a URL to Lighthouse!"
// }
