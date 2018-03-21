$('<h1>').text('GRUB QUEST').appendTo('body')


var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL = "https://api.uber.com/v1.2/products?latitude=37.7752315&longitude=-122.418075" 
   

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    headers:{
         "Authorization": "Token X4fRLlrbmV4JntpCe-d0Mo_FiETAHtQAAlaaNCpd" ,
         "Content-Type": "application/json" ,
         "Accept-Language": "en_US" 
        
    },
    method: "GET"
  })
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

    // Log the queryURL
    

    $(".prices").html("<h1>" + response.price_details);

    console.log(response)
  })