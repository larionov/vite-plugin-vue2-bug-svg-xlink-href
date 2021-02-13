import Vue from "vue";
import App from "./App.vue";

const createApp = (context) => {
  const app = new Vue({
    // store,
    data() {
      return { context };
    },
    render: (h) => h(App),
  });

  return app;
};

createApp(App).$mount("#app");
