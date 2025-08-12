const axios = require('axios');

// URL of the API
const apiUrl = 'http://68.183.90.216:8080/ugcnet2024/cse/questions';

// Fetch data using Axios with proper CORS handling
axios.get(apiUrl, {
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => {
  console.log('Fetched Data:', response.data); 
})
.catch(error => {
  console.error('Error fetching data:', error);
});