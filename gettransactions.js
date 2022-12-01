const form = document.getElementById('form');

function getDataFromApi(event) {
  let startdate = document.getElementById('startdate').value;
  let enddate = document.getElementById('enddate').value;
  let url = "http://localhost:3000"

  var settings = {
    "url": `${url}/api/transactions?start=${startdate}&end=${enddate}`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  
  var myArray = [];
  console.log("calling API");
  $.ajax(settings).done(function (response) {
    myArray = response;
    buildTable(myArray);
    console.log(myArray);
  });
  event.preventDefault();
}


function buildTable(data){
  var table = document.getElementById('myTable')

  for (var i = 0; i < data.length; i++){
      var row = `<tr>
                      <td>${data[i].date}</td>
                      <td>${data[i].amount}</td>
                      <td>${data[i].quantity}</td>
                      <td>${data[i].customer_id}</td>
                </tr>`
      table.innerHTML += row

  }
}

form.addEventListener('submit', getDataFromApi);
