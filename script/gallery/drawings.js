let url = "/pages/data.json";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => showData(data, data.drawings))
  .then(init1)
  .then(init2)
  .catch((err) => `Error: ${err}`);

import { init1, init2 } from "../artDisplay.js";
import { showData } from "../showData.js";
