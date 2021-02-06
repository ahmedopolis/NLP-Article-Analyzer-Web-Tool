import { validURL } from "./validURL";
function runAction() {
  const submitButton = document.querySelector("#submit-button");
  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("::: Form Submitted :::");
    const urlInput = document.querySelector("#text-url").value;

    if (validURL(urlInput)) {
      let localDataURL = "http://localhost:8081/apiData";
      processUserData(localDataURL, { url: urlInput });
    } else {
      console.log("An invalid URL was entered.");
    }

    // Async function to chain promises
    async function processUserData(dataURL, data) {
      await postData(dataURL, data).then(async () => {
        await updateUserInterface(dataURL);
      });
    }

    /* Function to POST data */
    async function postData(url = "", data) {
      const res = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      try {
        const newData = res;
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
              <p><strong>Model: </strong>${data.model}</p>
          </div>
          <div id="polarity-result">
              <p><strong>Polarity: </strong>${data.polarity}</p>
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
  });
}

// Function to append the 'runAction' function at after load.
function loadStarter() {
  if (document.readyState === "complete") {
    window.addEventListener("load", runAction);
  } else {
    window.addEventListener("load", runAction);
    return () => window.removeEventListener("load", runAction);
  }
}

loadStarter();

export { runAction };
