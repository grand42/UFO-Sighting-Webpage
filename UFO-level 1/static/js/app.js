// from data.js
var tableData = data;

// Select button
var button = d3.select("#filter-btn");

// Select form
var form_control = d3.select("#datetime");
var form = d3.select("#form")

// Select table body
var tbody = d3.select("tbody");



data.forEach((Sighting) => {
    var row = tbody.append("tr");
    Object.entries(Sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear table
    tbody.html("")

    // Get the value property of the input element
    var inputValue = form_control.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);


    filteredData.forEach((Sighting) => {
        var row = tbody.append("tr");
        Object.entries(Sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }