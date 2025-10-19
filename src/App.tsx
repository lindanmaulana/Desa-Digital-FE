import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import GuestRoute from "./routes/GuestRoute";
import AuthRoute from "./routes/AuthRoute";
import AuthLayout from "./app/auth/layout";
import SigninAuthPage from "./app/auth/signin";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<GuestRoute />} />

        <Route element={<AuthRoute />}>
          <Route path="/auth/*" element={<AuthLayout />}>
            <Route path="signin" element={<SigninAuthPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
