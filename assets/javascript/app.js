
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





$("#address").on("click", function(event) {
event.preventDefault();


let street = $("#street1_id").val().trim();
let city = $("#city_id").val().trim();
let state = $("#state_id").val().trim();
let zip = $("#zip_id").val().trim();
let radius = $('#radius').val().trim()*1609.34;
foursquareSearch("&categoryId=4bf58dd8d48988d163941735",zip,radius);

});





//Test Connection
$('<h1>').text('GRUB QUEST!!!').appendTo('body')



function foursquareSearch (cat, loc, rad){
    let apiString= 'https://api.foursquare.com/v2/venues/search?';
    const clientID = '&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0';
    const clientSecret ='&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ';
    const version = '&v=20170801';
    let location = String('&near='+loc);
    let radius = String('&radius='+rad);
    let categoryID = String(cat);
    const limit = '&limit=10'
  
    $.ajax({
        url: apiString+clientID+clientSecret+version+location+radius+categoryID+limit,
        // url: 'https://api.foursquare.com/v2/venues/search?&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ&v=20170801&categoryId=4bf58dd8d48988d112941735&near=85015',
        method:'GET'
    }).done((response)=>{
        //display 
        console.log(JSON.stringify(response));
        $('<h1>').text(JSON.stringify(response)).appendTo('body')
    });
}
// foursquareSearch("x");  


//Yelp get categories. 
