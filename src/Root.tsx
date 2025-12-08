import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LegalResources from "./LegalResources";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/legal-resources" element={<LegalResources />} />
      </Routes>
    </BrowserRouter>
  );
}