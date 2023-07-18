fetch('/.netlify/functions/lambda')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').textContent = data.message;
  })
  .catch(error => console.error(error));