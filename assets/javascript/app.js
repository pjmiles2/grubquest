
function uberQuery(){
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    // Here we are building the URL we need to query the database
    var startEstLat = sessionStorage.getItem("startLat");
    var startEstLng = sessionStorage.getItem("startLng");

    var queryURL = 'https://api.uber.com/v1.2/estimates/price?start_latitude='+startEstLat+'&start_longitude='+startEstLng+'end_latitude='+endEstLat+'&end_longitude='+endEstLng;
    
       
    // Here we run our AJAX call to the Uber API
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
        $(".prices").html("<h1>" + response.prices.estimate);
    
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
    let fullAddress = street + " " + city + " " + state + " " + zip;

//Searches foursquare for venue cagegories withing a given radius of a location (zip)
//Promise 1
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
        //Return array
    }).then(result => {
        return result.response.venues;
    })
}

    //address lat and longitude

// let venues = result.response.venues;
// let filteredArray = [];
// for(let i=0; i< venues.length; i++){
//     let id = getVenueDetails(venues[i].id)
//     filteredArray.push();
// }


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
    // return result;
}
    function getLocation() {

        var MQAPIKey = "UVs4ACBHVSdUdsBxF6ZcdIv1OSmOsM61";
        var MQaddress = sessionStorage.getItem("fulladdress");
        console.log(MQaddress);

        var queryURL = "http://open.mapquestapi.com/geocoding/v1/address?key="+MQAPIKey+"&location="+MQaddress;
        console.log(queryURL);

           
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response) {
           
           var startLat =  JSON.stringify(response.results[0].locations[0].latLng.lat);
           var startLng = JSON.stringify(response.results[0].locations[0].latLng.lng);

           console.log(startLat);
           console.log(startLng);

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


// searchPromise.then(value => console.log(value));
          sessionStorage.setItem("startLat", startLat);
          sessionStorage.setItem("startLng", startLng);

          });
        }
    });
