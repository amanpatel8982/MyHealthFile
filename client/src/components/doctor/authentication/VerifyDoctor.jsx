import { useState } from 'react';
import {useNavigate } from "react-router-dom";


export default function VerifyDoctor() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    licenseNo: '',
    specialization: '',
    experience: ''
  });

  const [files, setFiles] = useState({
    idProof: null,
    degreeCert: null
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = e => {
    setFiles(prev => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    Object.entries(files).forEach(([key, value]) => data.append(key, value));

    try {
      const res = await axios.post('http://localhost:5000/api/verify/upload', data);
      alert(res.data.message);
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4 text-center">Doctor Verification</h2>
        <input className="mb-2 w-full border p-2" placeholder="Name" name="name" onChange={handleChange} />
        <input className="mb-2 w-full border p-2" placeholder="License No" name="licenseNo" onChange={handleChange} />
        <input className="mb-2 w-full border p-2" placeholder="Specialization" name="specialization" onChange={handleChange} />
        <input className="mb-2 w-full border p-2" placeholder="Experience (years)" name="experience" onChange={handleChange} />
        <label className="block mt-2">ID Proof</label>
        <input type="file" name="idProof" onChange={handleFileChange} className="mb-2 w-full" />
        <label className="block mt-2">Degree Certificate</label>
        <input type="file" name="degreeCert" onChange={handleFileChange} className="mb-4 w-full" />
        <button type="submit" onClick={()=>navigate('/sidebar')} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Submit</button>
      </form>
    </div>
  );
}
