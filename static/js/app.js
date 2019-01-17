// from data.js
var tableData = data;

// YOUR CODE HERE!

// assign filter button to var
var filterBtn = d3.select("#filter-btn");

// when the the filter button is pressed the following operations will be performed. 
filterBtn.on("click", function () {
      
    // if there is anydata when the button is clicked it will be removed. 
    var tableRows = d3.selectAll("td").remove();
        
    // Prevent the page from refreshing ( TA Grading this -- whats the deal with this? Remember using it in the activities but forget the issues that could occur? It never really made a diffrence in my code.)
    d3.event.preventDefault();
    
    // Select the input element and get the get the value property of the input element
    var dateEntered = d3.select("#datetime").property("value");
    console.log(dateEntered);
 
    // Filter table by date entered. 
    var dataFiltered = tableData.filter(date => date.datetime === String(dateEntered));   
    console.log(dataFiltered);
  
    if (dataFiltered.length === 0) {
        console.log("Try Again");   
        d3.select(".navbar-header>a").attr("href").text("Try Again. Data Date Range: 1/1/2010 - 1/13/2010") ;
        
    }
    
    var test = d3.select(".navbar-header>a").attr("href");
    console.log(test);
    
    // Reference to the table body
    var tbody = d3.select("tbody");

    dataFiltered.forEach((data) => {
    // for each line of data add a new table row
    var row = tbody.append("tr");
        
    // for each data item add add a td
    Object.entries(data).forEach(([key, value]) => {
        
    // assign the method append to create a td cell
    var cell = tbody.append("td");
    // for each value create a td element within the row
    cell.text(value);
        
       // check to see if object returnd is blank, if so create pop up?
        
   
        
    d3.selectAll("td").style("color", function() {
    return "hsl(" + Math.random() * 360 + ",75%,50%)";
        
        
    
                
                    });
               
          });
     }); 
});




