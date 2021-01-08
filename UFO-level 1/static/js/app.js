// from data.js
var tableData = data;

// Select button
var button = d3.select("#filter-btn");

// Select form
var form_control = d3.select("#datetime");

// Select table body
var tbody = d3.select("tbody");

// Create event handlers 
//button.on("click", runEnter);
//form.on("submit",runEnter);

data.forEach((Sighting) => {
    var row = tbody.append("tr");
    Object.entries(Sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
