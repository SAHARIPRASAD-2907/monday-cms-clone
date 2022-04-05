import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import CategoryContext from "./context";
function App() {
  const [categories, setCategories] = useState(null);
  const value = { categories, setCategories };
  return (
    <div className="app">
      <CategoryContext.Provider value={value}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage editMode={false} />} />
            <Route
              path="/ticket/:id"
              element={<TicketPage editMode={true} />}
            />
          </Routes>
        </BrowserRouter>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
