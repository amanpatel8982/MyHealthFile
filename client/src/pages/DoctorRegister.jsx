import React, { useState } from 'react';

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    signature: '',
    specialization: '',
    licenseNumber: '',
    issuingAuthority: '',
    experience: '',
    bio: '',
    procedures: '',
    associations: '',
    qualifications: '',
    workExperience: '',
    awards: '',
    resume: '',
    workPhone: '',
    workEmail: '',
    website: '',
    socialLinks: '',
    emergencyContact: '',
    medicalLicense: '',
    otherDocs: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Registration submitted successfully!');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Doctor Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Section 1: Personal Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">1. Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="input" required />
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input" required />
            <select name="gender" value={formData.gender} onChange={handleChange} className="input">
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input" required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="input" required />
            <input type="text" name="address" placeholder="Residential Address" value={formData.address} onChange={handleChange} className="input" required />
            <input type="file" name="signature" onChange={handleChange} className="input" />
          </div>
        </div>

        {/* Section 2: Professional Details */}
        <div>
          <h3 className="text-xl font-semibold mb-2">2. Professional Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} className="input" required />
            <input type="text" name="licenseNumber" placeholder="Medical License Number" value={formData.licenseNumber} onChange={handleChange} className="input" />
            <input type="text" name="issuingAuthority" placeholder="Issuing Authority" value={formData.issuingAuthority} onChange={handleChange} className="input" />
            <input type="text" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} className="input" />
            <textarea name="bio" placeholder="Professional Bio/Summary" value={formData.bio} onChange={handleChange} className="input" rows="2" />
            <textarea name="procedures" placeholder="Specialized Treatments" value={formData.procedures} onChange={handleChange} className="input" rows="2" />
            <input type="text" name="associations" placeholder="Professional Associations" value={formData.associations} onChange={handleChange} className="input" />
            <input type="text" name="qualifications" placeholder="Educational Qualifications" value={formData.qualifications} onChange={handleChange} className="input" />
            <input type="text" name="workExperience" placeholder="Work Experience" value={formData.workExperience} onChange={handleChange} className="input" />
            <input type="text" name="awards" placeholder="Awards & Recognition" value={formData.awards} onChange={handleChange} className="input" />
            <input type="file" name="resume" onChange={handleChange} className="input" />
          </div>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">3. Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="workPhone" placeholder="Work Phone Number" value={formData.workPhone} onChange={handleChange} className="input" />
            <input type="email" name="workEmail" placeholder="Work Email Address" value={formData.workEmail} onChange={handleChange} className="input" />
            <input type="url" name="website" placeholder="Website URL" value={formData.website} onChange={handleChange} className="input" />
            <input type="text" name="socialLinks" placeholder="Social Media Links" value={formData.socialLinks} onChange={handleChange} className="input" />
            <input type="text" name="emergencyContact" placeholder="Emergency Contact Info" value={formData.emergencyContact} onChange={handleChange} className="input" />
          </div>
        </div>

        {/* Section 4: Document Uploads */}
        <div>
          <h3 className="text-xl font-semibold mb-2">4. Document Uploads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="file" name="medicalLicense" onChange={handleChange} className="input" />
            <input type="file" name="otherDocs" onChange={handleChange} className="input" />
          </div>
        </div>

        {/* Section 5: Terms */}
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mr-2" />
            I agree to the Terms of Use, Privacy Policy, and Data Consent.
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorRegister;
