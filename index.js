
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer JCNe7KCZr0t8AxdAfcxkWLEaU9FH");
​
fetch("https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "ShortCode": 600978,
    "ResponseType": "Completed",
    "ConfirmationURL": "https://us-central1-payments-6a7cf.cloudfunctions.net/paymentCallback",
    "ValidationURL": "https://us-central1-payments-6a7cf.cloudfunctions.net/paymentCallback",
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));