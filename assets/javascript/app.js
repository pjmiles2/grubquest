//Test Connection
$('<h1>').text('GRUB QUEST!!!').appendTo('body')



function yelpSearch (item){
    let apiString= 'https://api.yelp.com/v3/businesses/search?';
    const apiKey = 'Authorization:Bearer=AnXBc34pOvTyRKzpgR--shTXcItVkepTGe3DENBhwfl0OxvSnnv9wYxCkgomQYJnskHgDl_TIOP2iZH-i6MV9PG7M-NlrHuUPT2CDT3aLyYCcvmi37NqJsLO5UKrWnYx'
    let radius = 0;
    let search = '';
    const term = "&restaurants";
    const limit='&limit=5';
    let price = '&price=';
    const open = '&open_now=true';
    let location='';
  
    $.ajax({
        url: 'https://api.yelp.com/v3/businesses/search?location=85015&categories=italian',
        method:'GET',
        headers: {Authorization:'Bearer AnXBc34pOvTyRKzpgR--shTXcItVkepTGe3DENBhwfl0OxvSnnv9wYxCkgomQYJnskHgDl_TIOP2iZH-i6MV9PG7M-NlrHuUPT2CDT3aLyYCcvmi37NqJsLO5UKrWnYx'}
    }).done((response)=>{
        //display 
        console.log(response);
        $('<h1>').text(JSON.stringify(response)).appendTo('body')
    });
}

yelpSearch("x");  


//Yelp get categories. 

