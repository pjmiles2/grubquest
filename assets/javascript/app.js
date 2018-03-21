


$('addressmodal').modal("show")


$("#address").on("click", function(event) {
event.preventDefault();


let street = $("#street1_id").val().trim();
let city = $("#city_id").val().trim();
let state = $("#state_id").val().trim();
let zip = $("#zip_id").val().trim();
let radius = $('#radius').val().trim()*1609.34;
foursquareSearch("&categoryId=4bf58dd8d48988d163941735",zip,radius);

let range = $("#stars").val();
let price = $("#dollars").val();

$('addressmodal').modal("hide")

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



