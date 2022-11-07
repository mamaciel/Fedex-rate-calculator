var headers, payload, response, token, url;
url = "https://apis-sandbox.fedex.com/oauth/token";
payload = {
  "grant_type": "client_credentials",
  "client_id": "l7a9318d71e9a24284a9c618b425fe6264",
  "client_secret": "9f6be83133aa4f3284def477b8fad897"
};
headers = {
  "Content-Type": "application/x-www-form-urlencoded"
};
response = requests.request("POST", url, {
  "data": payload,
  "headers": headers
});
console.log(response.text);

fetch('https://apis-sandbox.fedex.com/oauth/token', payload)




token = json.loads(response.text)["access_token"];
url = "https://apis-sandbox.fedex.com/rate/v1/rates/quotes";
payload = json.dumps({
  "accountNumber": {
    "value": "740561073"
  },
  "requestedShipment": {
    "shipper": {
      "address": {
        "postalCode": "02155",
        "countryCode": "US"
      }
    },
    "recipient": {
      "address": {
        "postalCode": "19468",
        "countryCode": "US"
      }
    },
    "pickupType": "DROPOFF_AT_FEDEX_LOCATION",
    "rateRequestType": ["ACCOUNT", "LIST"],
    "requestedPackageLineItems": [{
      "weight": {
        "units": "LB",
        "value": "13"
      }
    }]
  }
});
headers = {
  "Content-Type": "application/json",
  "X-locale": "en_US",
  "Authorization": "Bearer " + token
};
response = requests.request("POST", url, {
  "data": payload,
  "headers": headers
});
console.log(response.text);
