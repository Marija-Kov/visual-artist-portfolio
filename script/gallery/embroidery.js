let url = "/pages/data.json";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => showData(data, data.embroidery))
  .then(initShowDetails)
  .then(initShowLarger)
  .then(hamburgerMenuDisplay)
  .catch((err) => `Error: ${err}`);

import { hamburgerMenuDisplay } from "../ham-navigation.js";
import { initShowDetails, initShowLarger } from "../artDisplay.js";
import { showData } from "../showData.js";
