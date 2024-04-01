import * as globalScripts from "./global-scripts.js";
import Triangle from "../../models/Triangle.js";

const firstSideTriangleInput = document.querySelector("#firstSideTriangleInput");
const secondSideTriangleInput = document.querySelector("#secondSideTriangleInput");
const thirdSideTriangleInput = document.querySelector("#thirdSideTriangleInput");
const triangleSidesForm = document.querySelector("main section form");


triangleSidesForm.addEventListener("submit", () => {
    let triangle = new Triangle(firstSideTriangleInput.value, secondSideTriangleInput.value, thirdSideTriangleInput.value);
    console.log(triangle.checkTriangle());
})

