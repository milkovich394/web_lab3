import exceedData from "../../mockData/exceedData.js";
import { exceedTemplate } from "../templates/exceedTemplate.js";

const initExceed = () => {
    const exNode = document.querySelector(".exceeding_all_expectations");
    exNode.insertAdjacentHTML("beforeend", exceedTemplate(exceedData));
};

export default initExceed;