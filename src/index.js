import initializeTyped from "./pages/components/Typed";
import router from "./routes";
import "./style/SCSS/main.scss";


window.addEventListener("load", router);
window.addEventListener("hashchange", () => {
    if(location.hash === "home" || location.hash === "#/"){
        router();
        initializeTyped();
    }
});

