const image=document.getElementById("image");
const gender=document.getElementById("gender");
const age=document.getElementById("age");
const country=document.getElementById("country");
const predict=document.getElementById("predict");
const error_message=document.getElementById("empty");


window.onload=(loaded) =>{

   const url_image=`https://dog.ceo/api/breeds/image/random`
    fetch(url_image)
   .then(result => result.json())
   .then(data => {
     image.innerHTML=`<img src="${data.message}">`

   })
   
}

