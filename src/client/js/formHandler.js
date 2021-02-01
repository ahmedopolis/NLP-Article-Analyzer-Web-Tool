// Function to handle user data and interface update
function handleSubmit(event) {
  event.preventDefault();

  let data = {};
  let urlInput = document.getElementById("text-url").value;

  data = {
    userURL: urlInput,
  };

  let dataURL = "http://localhost:8080/apiData";

  async function processUserData() {
    await postData(dataURL, data).then(async () => {
      await updateUserInterface(dataURL);
    });
  }

  processUserData();

  /* Function to POST data */
  async function postData(url = "", data = {}) {
    const req = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        userURL: data.userURL,
      }),
    });
    try {
      const newRequest = req;
      return newRequest;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  /* Function to GET Project Data */
  async function getData(url = "") {
    const res = await fetch(url);
    try {
      const weatherData = await res.json();
      return weatherData;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  /* Function fetch sentimental data and to update UI respectively */
  async function updateUserInterface(dataURL) {
    let results = document.querySelector("#results-section");
    let getUserData = await getData(dataURL).then(async (data) => {
      results.innerHTML = `<div class="form-title">
          <h2>Form Results:</h2>
      </div>
      <div id="results">
          <div id="model-result">
              <p><strong>Models used: </strong>${data.model}</p>
          </div>
          <div id="polarity-result">
              <p><strong>Models used: </strong>${data.polarity}</p>
          </div>
          <div id="agreement-result">
              <p><strong>Agreement: </strong>${data.agreement}</p>
          </div>
          <div id="subjectivity-result">
              <p><strong>Subjectivity: </strong>${data.subjectivity}</p>
          </div>
          <div id="confidence-result">
              <p><strong>Confidence: </strong>${data.confidence}</p>
          </div>
          <div id="irony-result">
              <p><strong>Irony: </strong>${data.irony}</p>
          </div>
      </div>`;
    });
    return getUserData;
  }
}

export { handleSubmit };
