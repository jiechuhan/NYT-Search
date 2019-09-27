$(document).ready(function() {
    console.log("hello");

    let search;
    let noofRecords;
    let start;
    let end;

    function parameter(start, end) {
        let rval  = '';
        if(start) {
            rval += `&begin_date=${start}`;
        }
        if(end) {
            rval = `&end_date=${end}`;
        }
        return rval;
    }

    $("#searchTerms").on("keydown", function (event) {

        search = $("#searchTerms").val();
        console.log(search);
      })
      $("#noofRecords").on("keydown", function (event) {
  
        noofRecords = $("#noofRecords").val();
        console.log(noofRecords);
      })
      $("#startyear").on("keydown", function (event) {
  
        start = $("#startyear").val();
        console.log(start);
      })
      $("#endyear").on("keydown", function (event) {
  
        end = $("#endyear").val();
        console.log(end);
      })

    var baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=nXcQcucnntLRz5utqTQ0NYl2J4CaAmbd&limit=5`;


    var queryURL = baseUrl + parameter(start, end);
       
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(response)
        })



})
