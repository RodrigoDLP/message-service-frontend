
import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import RegisterTransaction from "./pages/RegisterTransaction";
import Payments from "./pages/payments";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-indigo-700 text-white flex flex-col">
          <div className="p-6 text-2xl font-bold border-b border-indigo-600">
            Dashboard
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "bg-indigo-900 font-semibold" : "hover:bg-indigo-600"
                }`
              }
            >
              Registrar Transacción
            </NavLink>
            <NavLink
              to="/payments"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "bg-indigo-900 font-semibold" : "hover:bg-indigo-600"
                }`
              }
            >
              Ver Pagos
            </NavLink>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<RegisterTransaction />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;