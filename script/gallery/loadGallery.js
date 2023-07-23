const loadGallery = (category) => {
    fetch("../data.json")
     .then((response) => {
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       } else {
         return response.json();
       }
     })
     .then((data) => showDetails(data[category]))
     .then(hamburgerMenu)
     .then(initShowDetailsBtn)
     .then(initShowLarger)
     .then(hamburgerMenuDisplay)
     .catch((err) => `Error: ${err}`);
   
     loading();
     navigation();
     return
   }
   
   import {initShowDetailsBtn, initShowLarger, showDetails} from "./artDisplay.js";
   import { loading } from "../aesthetics/loading.js";
   import { navigation, hamburgerMenu, hamburgerMenuDisplay } from "../navigation/navigation.js"
   
   export default loadGallery;