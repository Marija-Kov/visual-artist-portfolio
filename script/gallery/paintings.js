let url = "/pages/data.json";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => showData(data, data.paintings))
  .then(initShowDetails)
  .then(initShowLarger)
  .catch((err) => `Error: ${err}`);

import { initShowDetails, initShowLarger } from "../artDisplay.js";
import { showData } from "../showData.js";
