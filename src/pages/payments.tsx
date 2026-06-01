import React, { useEffect, useState } from "react";
import { getPayments } from "../api";
import type { Payment } from "../api";

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    getPayments().then(setPayments);
  }, []);

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Pagos Registrados</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Monto Final</th>
              <th className="px-4 py-2 text-left">Número de Tarjeta</th>
              <th className="px-4 py-2 text-left">Código</th>
              <th className="px-4 py-2 text-left">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, idx) => (
              <tr
                key={p.id}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2">{p.id}</td>
                {/* Mostrar monto final sin censura */}
                <td className="px-4 py-2 font-semibold text-green-600">
                  S/ {p.monto_final}
                </td>
                {/* Mantener la censura en la tarjeta si quieres */}
                <td className="px-4 py-2 font-mono text-gray-800">
                  {p.ntarjeta}
                </td>
                <td className="px-4 py-2">{p.codigo}</td>
                <td className="px-4 py-2">
                  {new Date(p.fecha).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
