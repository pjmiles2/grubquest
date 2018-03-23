
function uberQuery(){
<<<<<<< HEAD
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
    
       // console.log(response)
      });
    }
    
    
    $('addressmodal').modal("show")
    $(".navbar").hide();
    
    //Get address information from the user 
    
    $("#address").on("click", function(event) {
    event.preventDefault();
    let street = $("#street1_id").val().trim();
    let city = $("#city_id").val().trim();
    let state = $("#state_id").val().trim();
    let zip = $("#zip_id").val().trim();
    //Convert miles to meters
    let radius = $('#radius').val().trim()*1609.34;
    let fullAddress = street + "+" + city + "+" + state + "+" + zip;

    foursquareSearch("&categoryId=4bf58dd8d48988d142941735",zip,radius);
    
    let adventureLevel = $("#stars:checked").val();
    let priceNav = $("#dollars:checked").val(); 
    
    console.log(adventureLevel);
    
    $(".navbar").show();
    $("#startbutton").hide();
    
    $("#adventure-nav").html("<h3>Adventure Range: " + adventureLevel + "</h3>");
    $("#price-nav").html("<h3>Price Range: " + priceNav + "</h3>");
    
    
    sessionStorage.clear();
    sessionStorage.setItem("fulladdress", fullAddress)
    sessionStorage.setItem("street", street);
    sessionStorage.setItem("city",city);
    sessionStorage.setItem("state",state);
    sessionStorage.setItem("zip",zip);
    sessionStorage.setItem("radius",radius);
    sessionStorage.setItem("adventureLevel", adventureLevel);
    
    getLocation();
    initialChoices();
    
    });
    
    
    //Searches foursquare for venue cagegories withing a given radius of a location (zip)
    function foursquareSearch (cat, loc, rad){
        let apiString= 'https://api.foursquare.com/v2/venues/search?';
        const clientID = '&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0';
        const clientSecret ='&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ';
        const version = '&v=20170801';
        let location = String('&near='+loc);
        let radius = String('&radius='+rad);
        let categoryID = String(cat);
        const limit = '&limit=10';
      
        $.ajax({
            url: apiString+clientID+clientSecret+version+location+radius+categoryID+limit,
            // url: 'https://api.foursquare.com/v2/venues/search?&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ&v=20170801&categoryId=4bf58dd8d48988d112941735&near=85015',
            method:'GET'
        }).then((response)=>{
            //display 
           // console.log(JSON.stringify(response));
           // $('<h1>').text(JSON.stringify(response)).appendTo('body')
        });
    }
    // foursquareSearch("x");  
    
    
    //Get foursquare categories and search foursquare for items
    function getVenueDetails(venueID){
        let venueToSearch = venueID;
        let apiString= 'https://api.foursquare.com/v2/venues/'+venueToSearch    +'?';
        const clientID = '&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0';
        const clientSecret ='&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ';
        const version = '&v=20170801';
        $.ajax({
            url: apiString+clientID+clientSecret+version,
            method:'GET'
        }).then((response)=>{
            console.log(JSON.stringify(response));
        });
=======
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

   // console.log(response)
  });
}


$('addressmodal').modal("show")
$(".navbar").hide();

//Get address information from the user 

$("#address").on("click", function(event) {
event.preventDefault();
let street = $("#street1_id").val().trim();
let city = $("#city_id").val().trim();
let state = $("#state_id").val().trim();
let zip = $("#zip_id").val().trim();
//Convert miles to meters
let radius = $('#radius').val().trim()*1609.34;

foursquareSearch("&categoryId=4bf58dd8d48988d142941735",zip,radius);

let adventureLevel = $("#stars:checked").val();
let priceNav = $("#dollars:checked").val(); 

console.log(adventureLevel);

$(".navbar").show();
$("#startbutton").hide();

$("#adventure-nav").html("<h3>Adventure Range: " + adventureLevel + "</h3>");
$("#price-nav").html("<h3>Price Range: " + priceNav + "</h3>");


sessionStorage.clear();
sessionStorage.setItem("street", street);
sessionStorage.setItem("city",city);
sessionStorage.setItem("state",state);
sessionStorage.setItem("zip",zip);
sessionStorage.setItem("radius",radius);

initialChoices();

});


//Searches foursquare for venue cagegories withing a given radius of a location (zip)
function foursquareSearch (cat, loc, rad){
    let apiString= 'https://api.foursquare.com/v2/venues/search?';
    const clientID = '&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0';
    const clientSecret ='&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ';
    const version = '&v=20170801';
    let location = String('&near='+loc);
    let radius = String('&radius='+rad);
    let categoryID = '&categoryId='+cat;
    const limit = '&limit=10';
  
    $.ajax({ 
        url: apiString+clientID+clientSecret+version+location+radius+categoryID+limit,
        // url: 'https://api.foursquare.com/v2/venues/search?&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ&v=20170801&categoryId=4bf58dd8d48988d112941735&near=85015',
        method:'GET'
    }).then(result => {
        let venues = result.response.venues;
        let filteredArray = [];
        for(let i=0; i< venues.length; i++){
            filteredArray.push(getVenueDetails(venues[i].id));
        }
        console.log(filteredArray);
    });
}



//Get foursquare categories and search foursquare for items
async function getVenueDetails(venueID){
    let venueToSearch = venueID;
    let apiString= 'https://api.foursquare.com/v2/venues/'+venueToSearch+'?';
    const clientID = '&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0';
    const clientSecret ='&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ';
    const version = '&v=20170801';
    let result = await $.ajax({
        url: apiString+clientID+clientSecret+version,
        method:'GET'
    });
    return result;
}

function filterVenueResults(array){
    // console.log(array);
    $.each(array, (index, value)=>{
       //console.log(value);
      
     
    });
}


// getVenueDetails('535559ad498e2e9058a7938b');

//Takes array of venue categories (using cat ID) given by user and retures resteraunts in a given area. 
function mainSearch(choiceArray){
    let searchArray = []
    choiceArray.forEach((value, index)=>{
        let category = value;
        let location = sessionStorage.getItem("zip");
        let radius = sessionStorage.getItem('radius');
        let result = foursquareSearch(category, location, radius);
        searchArray.push(result);
    })
}

// foursquareSearch('4bf58dd8d48988d14e941735', sessionStorage.getItem("zip"),
// sessionStorage.getItem('radius'));

// let step1 = mainSearch(['4bf58dd8d48988d14e941735','4bf58dd8d48988d142941735']);
// console.log('step1: '+step1);
// filterVenueResults(step1);

function createCategories(adventureLevel){
    let optionsArray =[]
    if(adventureLevel === 'all'){
        optionsArray =[
            {
                value: 'American Restaurant',
                id: '4bf58dd8d48988d14e941735'
            },
            {
                value: 'Asian Restaurant',
                id: '4bf58dd8d48988d142941735'
            },
            {
                value: 'Burger Joint',
                id: '4bf58dd8d48988d16c941735'
            },
            {
                value: 'Mexican Restaurant',
                id: '4bf58dd8d48988d1c1941735'
            },
            {
                value: 'Pizza Place',
                id: '4bf58dd8d48988d1ca941735'
            }, {
                value: 'Sandwich Place',
                id: '4bf58dd8d48988d1c5941735'
            }, {
                value: 'Italian Restaurant',
                id: '4bf58dd8d48988d110941735'
            }
        ]
>>>>>>> 37cd668dc49b0b2393fb473c09b5ebfe650341f4
    }
    
    
   // getVenueDetails('535559ad498e2e9058a7938b');
    
    //Takes array of venue categories (using cat ID) given by user and retures resteraunts in a given area. 
    function mainSearch(choiceArray){
        choiceArray.forEach((value, index)=>{
    
        });
    }
<<<<<<< HEAD
    
    
    
    function createCategories(adventureLevel){
        let optionsArray =[]
        if(adventureLevel === 'all'){
            return [
                {
                    value: 'American Restaurant',
                    id: '4bf58dd8d48988d14e941735'
                },
                {
                    value: 'Asian Restaurant',
                    id: '4bf58dd8d48988d142941735'
                },
                {
                    value: 'Burger Joint',
                    id: '4bf58dd8d48988d16c941735'
                },
                {
                    value: 'Mexican Restaurant',
                    id: '4bf58dd8d48988d1c1941735'
                },
                {
                    value: 'Pizza Place',
                    id: '4bf58dd8d48988d1ca941735'
                }, {
                    value: 'Sandwich Place',
                    id: '4bf58dd8d48988d1c5941735'
                }, {
                    value: 'Italian Restaurant',
                    id: '4bf58dd8d48988d110941735'
                }
            ]
        }
        else if(adventureLevel === 'best'|| adventureLevel === 'most'){
           return [
                {
                    value: 'American Restaurant',
                    id: '4bf58dd8d48988d14e941735'
                },
                {
                    value: 'Asian Restaurant',
                    id: '4bf58dd8d48988d142941735'
                },
                {
                    value: 'Burger Joint',
                    id: '4bf58dd8d48988d16c941735'
                },
                {
                    value: 'Mexican Restaurant',
                    id: '4bf58dd8d48988d1c1941735'
                },
                {
                    value: 'Pizza Place',
                    id: '4bf58dd8d48988d1ca941735'
                }, {
                    value: 'Sandwich Place',
                    id: '4bf58dd8d48988d1c5941735'
                }, {
                    value: 'Hawaiian Restaurant',
                    id: '52e81612bcbc57f1066b79fe'
                }, {
                    value: 'Hot Dog Joint',
                    id: '4bf58dd8d48988d16f941735'
                }, {
                    value: 'Jewish Restaurant',
                    id: '52e81612bcbc57f1066b79fd'
                }, {
                    value: 'Latin American Restaurant',
                    id: '4bf58dd8d48988d1be941735'
                }, {
                    value: 'Mediterranean Restaurant',
                    id: '4bf58dd8d48988d1c0941735'
                }, {
                    value: 'Middle Eastern Restaurant',
                    id: '4bf58dd8d48988d115941735'
                }, {
                    value: 'African Restaurant',
                    id: '4bf58dd8d48988d1c8941735'
                }
            ]
        }
         
    }
    
    /*###################################################
    Patrick's code
    ##################################################*/
    
    var initialArray = createCategories(sessionStorage.getItem("adventureLevel"));    
    console.log(initialArray);
    console.log(sessionStorage.getItem("address"));
    function initialChoices() {
    
        $.each(initialArray, function (index, value){
        console.log(value);
    
        var choiceButton = $("<br><button><br>");
        choiceButton.attr("data-category", this.value);
        choiceButton.attr("id", "restaurant-type")
        choiceButton.attr("class", "btn btn-primary btn-lg btn-block");
        choiceButton.text(this.value);
    
        $("#initial-categories").append(choiceButton);
    });
    };
    
    
    
    //$("#restaurant-type").on("click", function() {
    
        
       
    
    
    
    
    
    
  //  });
  

    //address lat and longitude

    function getLocation() {



        var MQAPIKey = "UVs4ACBHVSdUdsBxF6ZcdIv1OSmOsM61";
        var MQaddress = sessionStorage.getItem("fulladdress");
        console.log(MQaddress);

        var queryURL = "http://www.mapquestapi.com/geocoding/v1/address?key="+MQAPIKey+"&location=Phoenix,AZ";


           
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response) {
        
           console.log(response.locations.latLng.lat)

          });
        }




    
=======
     return optionsArray;
}

>>>>>>> 37cd668dc49b0b2393fb473c09b5ebfe650341f4
