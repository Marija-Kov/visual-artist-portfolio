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
  .then(initshowDetailsBtn)
  .then(initShowLarger)
  .then(hamburgerMenuDisplay)
  .catch((err) => `Error: ${err}`);
  
  loading();

import { hamburgerMenuDisplay } from "../ham-navigation.js";
import { initshowDetailsBtn, initShowLarger } from "../artDisplay.js";
import { showData } from "../showData.js";
import { loading } from "../loading.js";
