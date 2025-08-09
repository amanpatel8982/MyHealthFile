import { useNavigate } from "react-router-dom";

export default function Step1_PersonalInfo() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto mt-25 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Step 1: Personal Information</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="border rounded-md p-3 w-full" />
          <input type="date" placeholder="Date of Birth" className="border rounded-md p-3 w-full" />
          <input type="text" placeholder="Gender" className="border rounded-md p-3 w-full" />
          <input type="text" placeholder="Aadhar Number" className="border rounded-md p-3 w-full" />
        </div>
        <div className="mt-6 text-right">
          <button
            type="button"
            onClick={() => navigate("/register/doctor/step-2")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Next →
          </button>
        </div>
      </form>
    </div>
  );
}
