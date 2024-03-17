import registrationData from "../../mockData/registrationData.js";
import { registrTemplate } from "../templates/registrTemplate.js";

const initRegistr = () => {
    const node = document.querySelector(".registration");
    node.insertAdjacentHTML("beforeend", registrTemplate(registrationData));
};

export default initRegistr;