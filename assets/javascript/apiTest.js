async function foursquareSearch (cat, loc, rad){
    let apiString= 'https://api.foursquare.com/v2/venues/search?';
    const clientID = '&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0';
    const clientSecret ='&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ';
    const version = '&v=20170801';
    let location = String('&near='+loc);
    let radius = String('&radius='+rad);
    let categoryID = '&categoryId='+cat;
    const limit = '&limit=10';
  
    let search = await $.ajax({ 
        url: apiString+clientID+clientSecret+version+location+radius+categoryID+limit,
        // url: 'https://api.foursquare.com/v2/venues/search?&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ&v=20170801&categoryId=4bf58dd8d48988d112941735&near=85015',
        method:'GET'
    });
    return search.response.venues;
}


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
       console.log(value);
       value.map((list)=>{
        console.log(list);
       });
     
    });
}

function mainSearch(choiceArray){
    let searchArray = []
    choiceArray.forEach((value, index)=>{
        let category = value;
        let location = '55304';
        let radius = '32186';
        let result = foursquareSearch(category, location, radius);
        searchArray.push(result);
    });
    return searchArray;
}

let step1 = mainSearch(['4bf58dd8d48988d14e941735','4bf58dd8d48988d142941735']);
filterVenueResults(step1);