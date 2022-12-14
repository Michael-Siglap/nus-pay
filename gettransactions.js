const form = document.getElementById('form');

function getDataFromApi(event) {
  let startdate = document.getElementById('startdate').value;
  let enddate = document.getElementById('enddate').value;
  let url = "http://localhost:3000"

  console.log(startdate)
  console.log(enddate)
  var settings = {
    "url": `${url}/api/transactions?start=${startdate}&end=${enddate}`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  
  var myArray = [];
  fetch(settings.url)
  .then(r => r.json())
  .then(data => { console.log(data); buildTable(data);} );
  event.preventDefault();
}


function buildTable(data){
  var table = document.getElementById('myTable')
  console.log(data)
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
