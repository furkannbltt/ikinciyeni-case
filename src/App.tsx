import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/Layout";
import CarListPage from "./pages/CarListPage/CarListPage";

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <CarListPage />
          </AppLayout>
        }
      />
    </Routes>
  </Router>
);

export default App;
