import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Home from "../../pages/HomePage";
import YOLOV8Inference from "../../pages/YOLOv8_Inference";
import YOLOV8Realtime from "../../pages/YOLOv8_Realtime";
import ResNet50 from "../../pages/ResNet50";
import VGG16 from "../../pages/VGG16";
import InceptionV3 from "../../pages/InceptionV3";
import AboutUs from "../..//pages/AboutUs";

describe ("Routing", () => {
    it("SHOULD render the HomePage Page", () => {
        const { getByText } = render(
            <BrowserRouter>
               <Home />
            </BrowserRouter>
        );
        const pageTitle = getByText(/Detection of Breakages Over Railway Tracks Using YOLOv8 Model/);
        expect(pageTitle).toBeInTheDocument();
    });

    it("SHOULD render the YOLOv8 Inference Page", () => {
        const { getByText } = render(
            <BrowserRouter>
                <YOLOV8Inference />
            </BrowserRouter>
        );
    });
});