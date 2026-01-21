import { handleClick } from "./utils/handleClick";
import router from "./routes";
import "./style/SCSS/main.scss";


window.handleClick = handleClick;
window.addEventListener("load", router);
window.addEventListener("hashchange", () => {
  router();
});
