function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    var input_url = document.querySelectorAll('input[name=test-url]');

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/save')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

const _postData = async (path, data = {}) => {
    await fetch(path, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify({text: input_url[0].value})
        })
        .then(res => res.json())
        .then(function(res) {

          console.log(res);

          document.getElementById('polarity').innerHTML = JSON.stringify(response);
          document.getElementById('subjectivity').innerHTML = JSON.stringify(response);
          document.getElementById('polarity_confidence').innerHTML = JSON.stringify(response);
          document.getElementById('subjectivity_confidence').innerHTML = JSON.stringify(response);
          document.getElementById('excerpt').innerHTML = JSON.stringify(response);

    const validUrl = require('valid-url');
    if (validUrl != null) {
      const { content } = validUrl;
    };
  }
)}


export { handleSubmit }
