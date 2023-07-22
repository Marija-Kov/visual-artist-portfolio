const loadGallery = (category) => {
    fetch("../data.json")
     .then((response) => {
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       } else {
         return response.json();
       }
     })
     .then((data) => showData(data, data[category]))
     .then(hamburgerMenu)
     .then(initshowDetailsBtn)
     .then(initShowLarger)
     .then(hamburgerMenuDisplay)
     .catch((err) => `Error: ${err}`);
   
     loading();
     navigation();
     return
   }
   
   import { hamburgerMenuDisplay } from "../ham-navigation.js";
   import {initshowDetailsBtn, initShowLarger} from "../artDisplay.js";
   import { showData } from "../showData.js";
   import { loading } from "../loading.js";
   import { navigation, hamburgerMenu } from "../components/navigation.js"
   
   export default loadGallery;