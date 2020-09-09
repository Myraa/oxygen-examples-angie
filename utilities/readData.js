var fs = require('fs'); 
var parse = require('csv-parse');

module.exports = {
    dataarray: function (){
        var csvData=[];
        fs.createReadStream('../data/login.csv')
        .pipe(parse({delimiter: ','}))
        .on('data', function(csvrow) {
            console.log(csvrow);
            //do something with csvrow
            csvData.push(csvrow);        
        })
        .on('end',function() {
          //do something with csvData
          console.log(csvData);
          return csvData;
        });
    
    }

}

