import React, { useState } from "react";
import { registerTransaction } from "../api";
import type { RawTransaction } from "../api";

const RegisterTransaction: React.FC = () => {
  const [form, setForm] = useState<RawTransaction>({
    amount: 0,
    creditcard: 0,
    codigo: "",
    email: "",
    // Ajuste: formato compatible con <input type="datetime-local">
    datetime: new Date().toISOString().slice(0, 16),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await registerTransaction(form);
    alert("Transacción registrada:\n" + JSON.stringify(result, null, 2));
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Registrar Transacción</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Monto
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Ingrese el monto"
            value={form.amount}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="creditcard"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Número de Tarjeta
          </label>
          <input
            type="number"
            id="creditcard"
            name="creditcard"
            placeholder="Ingrese el número de tarjeta"
            value={form.creditcard}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="codigo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Código de Restaurante
          </label>
          <input
            type="text"
            id="codigo"
            name="codigo"
            placeholder="Ingrese el código"
            value={form.codigo}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo (opcional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese el correo"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="datetime"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Fecha y Hora
          </label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={form.datetime}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterTransaction;
