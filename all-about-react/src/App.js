import HomePage from "./router-component/HomePage";
import AboutPage from "./router-component/AboutPage";
import NavBar from "./router-component/NavBar";
import { Routes, Route } from "react-router-dom";
import DocsPage from "./router-component/DocsPage";
import AuthPage from "./router-component/AuthPage";
import SignUpPage from "./router-component/SignUpPage";
import LoginPage from "./router-component/LoginPage";

function App() {
  return (
    <div className="text-xl font-medium h-screen">
      <div className="h-1/6">
        <NavBar />
      </div>
      <div className="h-5/6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="auth" element={<AuthPage />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>
          <Route path="docs" element={<DocsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
