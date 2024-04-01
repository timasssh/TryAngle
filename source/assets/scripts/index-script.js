import * as globalScripts from "./global-scripts.js";
import Triangle from "../../models/Triangle.js";

const triangleSidesForm = document.querySelector(".triangleSidesForm");
const allFormInputs = document.querySelectorAll(".triangleSidesForm input");
const formResultParagraph = document.querySelector(".formResult")


triangleSidesForm.addEventListener("submit", () => {
    allFormInputs.forEach((input) => {
        if (input.value === "") {
            input.value = 0;
        }
    });
    let triangle = new Triangle(allFormInputs[0].value, allFormInputs[1].value, allFormInputs[2].value);
    writeTriangleResult(triangle.checkTriangle());
})

function writeTriangleResult(booleanResult) {
    if (!booleanResult){
        formResultParagraph.textContent = `This triangle don't exists.`;
        return;
    }
    formResultParagraph.textContent = `This triangle exists.`;
} 