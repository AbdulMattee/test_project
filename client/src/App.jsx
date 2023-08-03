import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginForm from "./components/login";
import AppContextProvider from "./context/provider";
function App() {
  return (
    <>
      <AppContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>HEHE</h1>} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </AppContextProvider>
    </>
  );
}

export default App;
