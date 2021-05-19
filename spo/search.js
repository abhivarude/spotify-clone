let browseurl="http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6"



async function value1()
{
    const clientId = '3db0b135359449fea5ed85720b5d1bbd';
    const clientSecret = 'a74a3cd4908d4c9589e7d3b6d1b1fa0d';

   var result= await fetch(" https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'


      });

      var data= await result.json();
    var tokendata=data.access_token;
      //console.log(data);
      playlist(tokendata);

 }



 async function playlist(tokendata)
 {
    
    var result= await fetch("	https://api.spotify.com/v1/browse/categories", {
        method: "GET",
        headers: {
           
            'Authorization' : 'Bearer ' +tokendata,
        },
        
      });


const playlistdata=await result.json();
var play=playlistdata.categories.items;

//finaldata(play);
console.log(play);
finaldata(play);

 }

function finaldata(play)
{
    let cont=document.querySelector(".playlisthtml");
let row=document.createElement("div");
row.setAttribute("class","row");

play.forEach((elevalue) => {
    
    let coloumn=createElement("div","col-sm-12 col-md-6 col-lg-3 col-xl-4","pad1");


    let card=createElement("div","card");
    
    //card.style.backgroundImage = "url(https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg)"
    
    // let image1=createElement("img","card-img-top");
    // image1.src="spotifylogo.png";
    
    let image1=createElement("img","card-img-top");

    let sr=elevalue.icons;
    var sr1=sr[0].url;
    image1.src=sr1;
    
    let cardbody=createElement("div","card-body");
    let h6tag=createElement("h6","card-title");
    h6tag.innerHTML=elevalue.name;
    h6tag.style.color="black";
    var preview1=createElement("a","btn btn-primary")
    preview1.innerHTML=elevalue.id;
    preview1.href=elevalue.href;

cardbody.append(h6tag,preview1);
card.append(image1,cardbody);
coloumn.append(card);
row.append(coloumn);
cont.append(row);





});





}


function createElement(ele,eleclass="",eleid="")
{
    let element=document.createElement(ele);
    element.setAttribute("class",eleclass);
    element.setAttribute("id",eleid);
    return element;

}
