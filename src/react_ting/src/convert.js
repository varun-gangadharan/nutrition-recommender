const fs = require('fs');
const Papa = require('papaparse');

const csvFile = fs.readFileSync('mydata.csv', 'utf8');

Papa.parse(csvFile, {
    header: true,
    complete: function(results) {
        fs.writeFileSync('data.json', JSON.stringify(results.data));
    }
});
