import React from "react";

const PrescriptionsPage = () => {
  const prescriptions = [
    {
      id: 1,
      patient: "John Doe",
      medicine: "Paracetamol 500mg",
      dosage: "1 tablet twice daily",
      date: "2025-09-01",
    },
    {
      id: 2,
      patient: "Alice Smith",
      medicine: "Amoxicillin 250mg",
      dosage: "1 capsule thrice daily",
      date: "2025-08-28",
    },
    {
      id: 3,
      patient: "Robert Brown",
      medicine: "Vitamin D3",
      dosage: "1 tablet daily",
      date: "2025-08-15",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Prescriptions</h1>
      <p className="text-gray-600 mb-6">
        List of all prescriptions provided to patients.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg overflow-hidden shadow">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Patient</th>
              <th className="px-4 py-2 text-left">Medicine</th>
              <th className="px-4 py-2 text-left">Dosage</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((p, index) => (
              <tr
                key={p.id}
                className={`border-t ${index % 2 === 0 ? "bg-gray-50" : ""}`}
              >
                <td className="px-4 py-2">{p.id}</td>
                <td className="px-4 py-2">{p.patient}</td>
                <td className="px-4 py-2">{p.medicine}</td>
                <td className="px-4 py-2">{p.dosage}</td>
                <td className="px-4 py-2">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Prescription Button */}
      <div className="mt-6">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          + Add Prescription
        </button>
      </div>
    </div>
  );
};

export default PrescriptionsPage;
