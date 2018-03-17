//Test Connection
$('<h1>').text('GRUB QUEST!!!').appendTo('body')



function foursquareSearch (cat, loc, rad){
    let apiString= 'https://api.foursquare.com/v2/venues/search?';
    const clientID = '&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0';
    const clientSecret ='&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ';
    const version = '&v=20170801';
    let location = '&near='+loc;
    let radius = '&radius='+rad;
    let categoryID = '&categoryId=4bf58dd8d48988d112941735'
    const limit = '&limit=10'
  
    $.ajax({
        url: 'https://api.foursquare.com/v2/venues/search?&client_id=P4KB5LUTWWYFAH4WWCI0OAA4UVU3NC0LKIKFJABAAAZ5ZBV0&client_secret=VPWEYY3QVF2CU10AKLACJPBIDYR4QIPG2PUUSBY30FZUITVJ&v=20170801&categoryId=4bf58dd8d48988d112941735&near=phoenix,az',
        method:'GET'
    }).done((response)=>{
        //display 
        console.log(JSON.stringify(response));
        $('<h1>').text(JSON.stringify(response)).appendTo('body')
    });
}
foursquareSearch("x");  


//Yelp get categories. 

