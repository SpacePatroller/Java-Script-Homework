// from data.js
var tableData = data;

// YOUR CODE HERE!

var filterBtn = d3.select("#filter-btn");

// Complete the click handler for the form
filterBtn.on("click", function () {

  // Prevent the page from refreshing

  d3.event.preventDefault();
  
    // Select the input element and get the and Get the value property of the input element
  var dateEntered = d3.select("#datetime").property("value");
      console.log(dateEntered);
 
   // Filter table by date entered. 
    
  var dataFiltered = tableData.filter(date => date.datetime === String(dateEntered));
    
  console.log(dataFiltered);
 
});
