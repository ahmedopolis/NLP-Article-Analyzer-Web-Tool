/**
 * Function to convert 'polarity' output from api to 'polarity word'.
 * Originated from (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)
 * */
function polarityChecker(score) {
  let display;
  switch (score) {
    case "P+":
      display = "strong positive";
      break;
    case "P":
      display = "positive";
      break;
    case "NEW":
      display = "neutral";
      break;
    case "N":
      display = "negative";
      break;
    case "N+":
      display = "strong negative";
      break;
    case "NONE":
      display = "no sentiment";
  }
  return display.toUpperCase();
}

export { polarityChecker };
