// Set your app credentials
const credentials = {
    apiKey: 'YOUR API KEY HERE',
    username: 'YOUR APP USERNAME',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);
// Get the SMS service
const sms = AfricasTalking.SMS;
const phone_number = [
    {
        name: 'XXX',
        phone: "+254XXXXX"
    },
    {
        name: 'XXX',
        phone: "+254XXXXX"
    },
    {
        name: 'XXX',
        phone: "+254XXXXX"
    },
    {
        name: 'XXX',
        phone: "+254XXXXX"
    },
]

function sendMessage() {
    phone_number.map((item) => {

        const options = {
            to: item.phone,
            message: "Hello there," + item.name + "! Welcome to DAV_EE INC. We are proud of you."
            //  from:"INVOICER"
        }

        sms.send(options)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });

    });



}

sendMessage();