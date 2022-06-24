// Set your app credentials
const credentials = {
    apiKey: 'YOUR APP API KEY',
    username: 'YOUR APP USERNAME',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);
// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+254XXXX', '+254XXXX'],
        // Set your message
        message: "Hello World!",
        // Set your shortCode or senderId  //optional
        //from: 'XXYYZZ'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
}

sendMessage();