import {footerData, theEnd} from "../../mockData/footerData.js";
import { createfooterTemplate, createTheEnd } from "../templates/footerTemplate.js";

const initFooter = () => {
    const node = document.querySelector(".footer");
    node.insertAdjacentHTML("beforeend", createfooterTemplate(footerData));

    const nodeEnd = document.querySelector(".law_protected");
    nodeEnd.insertAdjacentHTML("beforeend", createTheEnd(theEnd));
};

export default initFooter;