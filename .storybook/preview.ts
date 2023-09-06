import { Preview, setup } from "@storybook/vue3";

// IONIC STUFF
import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
// import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
// import "../src/theme/variables.css";

import "@fontsource-variable/source-sans-3"; // Defaults to wght axis
import "@fontsource-variable/source-sans-3/wght.css"; // Specify axis
import "@fontsource-variable/source-sans-3/wght-italic.css"; // Specify axis and style

import StarRating from "vue-star-rating"

setup((app) => {
  app.use(IonicVue).component('star-rating', StarRating);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;