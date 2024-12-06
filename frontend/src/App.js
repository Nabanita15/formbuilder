import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormEditor from "./pages/FormEditor";
import FormPreview from "./pages/FormPreview";
import SubmitResponses from "./pages/SubmitResponses";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormEditor />} />
        <Route path="/form/:id" element={<FormPreview />} />
        <Route path="/form/:id/submit" element={<SubmitResponses />} />
      </Routes>
    </Router>
  );
};

export default App;


