import "./App.css";
import { Signin } from "./components/Signin";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/Dashboard";
import { Receipt } from "./components/Receipt";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/receipt" element={<Receipt/>} />
          {/* <Route path="/send" element={<SendMoney} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
