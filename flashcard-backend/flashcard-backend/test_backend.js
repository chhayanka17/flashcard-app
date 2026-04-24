const axios = require('axios');

axios.post('http://localhost:5000/api/generate', {
  notes: "Albert Einstein developed the theory of relativity. India gained independence in 1947."
})
.then(response => {
  console.log("Response:", response.data);
})
.catch(error => {
  console.error("Error:", error.message);
});