let url="http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6"



async function value()
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
cheak(tokendata);

 }



 async function cheak(tokendata)
 {
    //var result= await fetch("https://api.spotify.com/v1/artists//albums", {
       // https://api.spotify.com/v1/albums/{id}
    var result= await fetch("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks", {
        method: "GET",
        headers: {
           
            'Authorization' : 'Bearer ' +tokendata,
        },
        
      });

const data=await result.json();
var a=data.items;
console.log(a);

album(a)
 }



 function album(data)
{
    
    
let container=document.querySelector(".albums");
let row=document.createElement("div");
row.setAttribute("class","row");

data.forEach((value) => 
{
let coloumn=createElement("div","col-sm-12 col-md-6 col-lg-3 col-xl-4","pad");


let card=createElement("div","card");
let link=value.uri;
card.style.backgroundImage = "url(images.jpg)"

let image=createElement("img","card-img-top");
image.src="spotifylogo.png";

let cardbody=createElement("div","card-body");
let h5tag=createElement("h6","card-title");
h5tag.innerHTML=value.name;
h5tag.style.color="white";
var preview=createElement("a","btn btn-primary")
preview.innerHTML= `&#9835`;
preview.href=value.preview_url;
cardbody.append(h5tag,preview);
card.append(image,cardbody);
coloumn.append(card);
row.append(coloumn)
container.append(row);
    
}); 


}




function browse()
{
    let container4=document.querySelector(".albums");
    document.getElementsByClassName('albums')[0].innerHTML="abhijeet haariafjsj";

}














function createElement(ele,eleclass="",eleid="")
{
    let element=document.createElement(ele);
    element.setAttribute("class",eleclass);
    element.setAttribute("id",eleid);
    return element;

}




