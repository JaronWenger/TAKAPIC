import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import ThankYouPage from "./components/ThankYouPage"; // Import your new page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          {/* Redirect any invalid route to the main page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
