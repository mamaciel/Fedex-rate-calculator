var form = document.getElementById('form')

form.addEventListener('submit', function(event) {

    event.preventDefault();

    var senderZip = document.getElementById("FCity").value;
    var receiverZip = document.getElementById("TCity").value;
    var weight = document.getElementById("weight").value;

    console.log(senderZip, receiverZip, weight);
  
    var input = {
      "grant_type": "client_credentials",
      "client_id": "l7a9318d71e9a24284a9c618b425fe6264",
      "client_secret": "9f6be83133aa4f3284def477b8fad897"
    }

    var data = JSON.stringify(input)
  
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    

    xhr.open("POST", "https://apis-sandbox.fedex.com/oauth/token");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

    })
    /*
    var payload = {
      "grant_type": "client_credentials",
      "client_id": "l7a9318d71e9a24284a9c618b425fe6264",
      "client_secret": "9f6be83133aa4f3284def477b8fad897"
    }

    fetch('https://apis-sandbox.fedex.com/oauth/token', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        

      }
    })

    
    /*fetch('https://apis-sandbox.fedex.com/rate/v1/rates/quotes', {
        method: 'POST',
        mode: 'cors',
        headers: {
            //'Access-Control-Allow-Origin': '*',
            //'Access-Control-Allow-Credentials': 'true',
            //'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            //'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            'Content-Type': 'application/json',
            'X-locale': 'en_US',
            'Authorization': 'l7a9318d71e9a24284a9c618b425fe6264',
        },

        body: JSON.stringify ({
            "accountNumber": {
              "value": "740561073"
            },
            "requestedShipment": {
              "shipper": {
                "address": {
                  "postalCode": `${senderZip}`,
                  "postalCode": '02155',
                  "countryCode": "US"
                }
              },
              "recipient": {
                "address": {
                  "postalCode": `${receiverZip}`,
                  "postalCode": '02155',
                  "countryCode": "US"
                }
              },
              "pickupType": "DROPOFF_AT_FEDEX_LOCATION",
              "rateRequestType": [
                "ACCOUNT",
                "LIST"
              ],
              "requestedPackageLineItems": [
                {
                  "weight": {
                    "units": "LB",
                    "value": '13'
                  }
                }
              ]
            }
          })

    })//.then(res => {
       // console.log(res.json())
    //})
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

*/

