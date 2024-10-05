import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ResNet50 from "./pages/VarroaResNet50";
import VGG16 from "./pages/VarroaVGG16";
import InceptionV3 from "./pages/VarroaInceptionV3";
import AboutUs from "./pages/AboutUs";
import YOLOv7 from "./pages/VarroaYOLOv7";
import YOLOv8 from "./pages/VarroaYOLOv8";
import YOLOv9 from "./pages/VarroaYOLOv9";
import YOLOv10 from "./pages/VarroaYOLOv10";

export default function App() {
  return (
    <div className="font-Open">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/YOLOv7" element={<YOLOv7 />} />
          <Route path="/YOLOv8" element={<YOLOv8 />} />
          <Route path="/YOLOv9" element={<YOLOv9 />} />
          <Route path="/YOLOv10" element={<YOLOv10 />} />
          <Route path="/resnet50" element={<ResNet50 />} />
          <Route path="/vgg16" element={<VGG16 />} />
          <Route path="/inceptionv3" element={<InceptionV3 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*">"404 Not Found!"</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
