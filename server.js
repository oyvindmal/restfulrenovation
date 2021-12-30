const express = require('express')
const app = express()
const port = 3000
var data = require('./data/vadso.js')
app.get('/', (req, res) => {
  res.send('Hello World!')
})


Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.toSearchableString = function() {
  var date = new Date(this.valueOf());
  
  return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() 
}

var test = new Date()
console.log(test.addDays(5).toSearchableString());

app.get('/test', (req, res) => {
  res.json(data)
})


	
app.get('/tomorrow', (req, res) => {
 var today = new Date();
  var tomorrow = today.addDays(1);
  
  

  var routeData = data.data.routedata;
  
  routeData.map((a) => {
    var test2 = new Date(a.date);
    test2.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    tomorrow.setHours(0,0,0,0);
    if(test2.toDateString() === today.toDateString()) {
      res.json({"result" : true});
    }
     if(test2.toDateString() === tomorrow.toDateString()) {
      res.json({"result" : true});
    }
    
    });
  res.json({"result" : false});
})
/*app.listen(3000, 
	() => console.log("Server is running..."));*/
	

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));