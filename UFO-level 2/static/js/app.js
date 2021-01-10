// from data.js
var tableData = data;

// Select button
var button = d3.select("#filter-btn");

// Select form
var date_control = d3.select("#datetime");
var city_control = d3.select("#city");
var state_control = d3.select("#state");
var form = d3.select("#form");

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
form.on("submit", runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Clear table
    tbody.html("")

    // Get the value property of the input element
    var dateinputValue = date_control.property("value");
    var cityinputValue = city_control.property("value").toLowerCase();
    var stateinputValue = state_control.property("value").toLowerCase();

    // Filter the data by the value
    var filteredDate= tableData.filter(tableData => tableData.datetime === dateinputValue);
    var filteredcity= tableData.filter(tableData => tableData.city === cityinputValue);
    var filteredstate= tableData.filter(tableData => tableData.state === stateinputValue);

   // var filteredData = tableData.filter(tableData => tableData.datetime === dateinputValue);
    var filteredData = tableData.filter(tableData => tableData.city === cityinputValue && (tableData.datetime === dateinputValue) && (tableData.state === stateinputValue));
   // filter city and state
    var citystate = tableData.filter(tableData => tableData.city === cityinputValue && (tableData.state === stateinputValue));
    // date and city
    var citydate = tableData.filter(tableData => tableData.city === cityinputValue && (tableData.datetime === dateinputValue));
     // date and state
    var statedate = tableData.filter(tableData => tableData.state === stateinputValue && (tableData.datetime === dateinputValue));

    // If statements for returning form searches
    if((filteredData.length == 0) && (filteredDate.length ==0) && (filteredcity.length ==0) && (filteredstate.length ==0)) {
        tbody.append("tr").append("td").text("No UFO sightings found");
    }
    else if (filteredData.length !== 0){
    filteredData.forEach((Sighting) => {
        var row = tbody.append("tr");
        Object.entries(Sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }
    else if (citystate.length !== 0 && filteredDate.length == 0){
      citystate.forEach((Sighting) => {
          var row = tbody.append("tr");
          Object.entries(Sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        });
      }
      else if (citydate.length !== 0 && filteredstate.length==0){
        citydate.forEach((Sighting) => {
            var row = tbody.append("tr");
            Object.entries(Sighting).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
        }
        else if (statedate.length !== 0 && filteredcity.length==0){
          statedate.forEach((Sighting) => {
              var row = tbody.append("tr");
              Object.entries(Sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
              });
            });
          }
          else {
          var rendertable=(term)=> {
            term.forEach((Sighting) => {
            var row = tbody.append("tr");
            Object.entries(Sighting).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
        }; rendertable(filteredDate)||rendertable(filteredcity)||rendertable(filteredstate)}

          
  };