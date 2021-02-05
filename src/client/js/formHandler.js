function runAction(event) {
  // Event listener to add function to existing HTML DOM element
  document
    .getElementById("submit-button")
    .addEventListener("click", handleSubmit(event));

  // Function to handle user data and interface update
  function handleSubmit(event) {
    event.preventDefault();

    const urlInput = document.getElementById("text-url").value;

    let localData = {
      userInputURL: urlInput,
    };

    let localDataURL = "http://localhost:8081/apiData";

    async function processUserData(dataURL, data) {
      await postData(dataURL, data).then(async () => {
        await updateUserInterface(dataURL);
      });
    }

    processUserData(localDataURL, localData);

    /* Function to POST data */
    async function postData(url = "", data) {
      const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          userURL: data.userInputURL,
        }),
      });
      try {
        const newData = await res.json();
        return newData;
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

    /* Function to GET Project Data */
    async function getData(url = "") {
      const res = await fetch(url);
      try {
        const sentimentalData = await res.json();
        return sentimentalData;
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }
}

export { runAction };
