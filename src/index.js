import "../css/style.css";
import { showModal } from "./component/input-data.js";
import "./global/main.js";
document.querySelector("#add-button").addEventListener("click", () => {
  showModal();
});

document.querySelector(".btn-add").addEventListener("click", () => {
  showModal();
});

document.querySelector("footer p span.date").innerText =
  new Date().getFullYear();
