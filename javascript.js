//declare the varaibles
const image=document.getElementById("image");
const gender=document.getElementById("gender");
const age=document.getElementById("age");
const country=document.getElementById("country");
const predict=document.getElementById("predict");
const error_message=document.getElementById("empty");

//eventlistener to the button predict to get the data on click
predict.addEventListener('click', getdata);

//function onload to get a new image everytime the window is loaded
window.onload=(loaded) =>{

   const url_image=`https://dog.ceo/api/breeds/image/random`
    fetch(url_image)
   .then(result => result.json())
   .then(data => {
     image.innerHTML=`<img src="${data.message}">`

   })
   
}

//function getdata to get the userinput ans start getting the data from the apis
function getdata(){

    const user_input=document.getElementById("name");
    if(user_input.value.length == 0){
      error_message.innerHTML=`Please enter a name!`
    }
    else{
      error_message.innerHTML=``
      request(user_input);//funtion request take the value of the user input and fetch the apis due to this value
    }
    
}

//call the funtion request
request=(user_input) =>{

   let url_gender=`https://api.genderize.io?name=${user_input.value}`//declare varaible to takes the api url
   fetch(url_gender) //fetch the api
   .then(result => result.json()) //get the json file after the fetch
   .then(data => { // get the data from the json file
      gender.innerHTML=`${data.gender}`//edit the inner html of the html tag(gender)

   })

   let url_age=`https://api.agify.io/?name=${user_input.value}`
   fetch(url_age )
   .then(result => result.json())
   .then(data => {
      age.innerHTML=`${data.age}`

   })

   let url_country = `https://api.nationalize.io/?name=${user_input.value}`
   fetch(url_country)
   .then(result => result.json())
   .then(data => {
      country.innerHTML=
      `<li>${data.country[0].country_id}</li>`+`<li>${data.country[1].country_id}</li>`+`<li>${data.country[2].country_id}</li>`
 
   })

}