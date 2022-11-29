const uid = document.getElementById('custId');
const pass = document.getElementById('pwd');
const b1 = document.getElementById('b1');

/* GET VERSION  */

console.log("test")

function getFromServer(e){
  e.preventDefault();
  var querryStr =  "https://nusstore.glitch.me/login?custId=" + uid.value + "&pwd=" + pass.value;
  console.log (querryStr);
  //USING FETCH instead of Jquery
  fetch(querryStr)
    // when we get a response map the body to json
    .then((response) => response.json())
    // and pass the JSON data to mydata for rendering
    .then((data) => renderhtml(data));
}
  
function renderhtml(data){    
  console.log(data.success);
  if (data.success == true) {
    window.location.href = "nuspay.html" 
  }
  else {
    var text = "<h8>Invalid ID or Password</h8>";
    document.querySelector(".mypanel").innerHTML = text;
    
  }
  
  
}

b1.addEventListener('click',getFromServer);