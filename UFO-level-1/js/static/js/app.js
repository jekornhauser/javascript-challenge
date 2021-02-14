// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildtable(data){
    tbody.html("");
    data.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};

buildtable(tableData);


var button = d3.select("#filter-btn");
var form = d3.select("#filters");

button.on("click", submitHandler);
form.on("submit", submitHandler);

function submitHandler(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime"); 
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    buildtable(filteredData);
};

buildtable(tableData);