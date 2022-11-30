
    setTimeout(() => {
      document.querySelectorAll(".line").forEach((e) => {
        e.style.opacity = "1";
      });
    }, 2000);
    hamburgerMenuDisplay();
    logoScrollAnimation();

import { hamburgerMenuDisplay } from "./ham-navigation.js";
import { logoScrollAnimation } from "./logoScrollAnimation.js";