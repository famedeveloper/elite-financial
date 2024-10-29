import { useState } from "react";

export default function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    dob: "",
    cnic: "",
    occupation: "",
    email: "",
    mobile: "",
  });

  const [nationality, setNationality] = useState("");
  const [residencyStatus, setResidencyStatus] = useState("");
  const [employmentReason, setEmploymentReason] = useState("");
  const [stayDuration, setStayDuration] = useState("");

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold">Personal Information</h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={personalInfo.fullName}
          onChange={handlePersonalInfoChange}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={personalInfo.dob}
          onChange={handlePersonalInfoChange}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="text"
          name="cnic"
          placeholder="CNIC No"
          value={personalInfo.cnic}
          onChange={handlePersonalInfoChange}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <select
          name="occupation"
          value={personalInfo.occupation}
          onChange={handlePersonalInfoChange}
          className="border border-gray-300 p-2 rounded"
          required
        >
          <option value="">Select Occupation</option>
          <option value="Corporate Sector">Corporate Sector</option>
          <option value="Federal Govt.">Federal Govt.</option>
          <option value="Provincial Govt">Provincial Govt</option>
          <option value="Research / Teacher">Research / Teacher</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={personalInfo.mobile}
          onChange={handlePersonalInfoChange}
          className="border border-gray-300 p-2 rounded"
          required
        />
      </div>

      <h4 className="mt-6 font-semibold">Nationality</h4>
      <div className="flex gap-4">
        <label>
          <input
            type="radio"
            name="nationality"
            value="Pakistani"
            checked={nationality === "Pakistani"}
            onChange={(e) => {
              setNationality(e.target.value);
              setResidencyStatus("");
              setEmploymentReason("");
              setStayDuration("");
            }}
            className="mr-2"
          />
          Pakistani
        </label>
        <label>
          <input
            type="radio"
            name="nationality"
            value="Foreigner"
            checked={nationality === "Foreigner"}
            onChange={(e) => {
              setNationality(e.target.value);
              setResidencyStatus("");
              setEmploymentReason("");
              setStayDuration("");
            }}
            className="mr-2"
          />
          Foreigner
        </label>
      </div>

      {nationality && (
        <>
          <h4 className="mt-6 font-semibold">Residential Status</h4>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="residencyStatus"
                value="Resident"
                checked={residencyStatus === "Resident"}
                onChange={(e) => setResidencyStatus(e.target.value)}
                className="mr-2"
              />
              Resident
            </label>
            <label>
              <input
                type="radio"
                name="residencyStatus"
                value="Non-Resident"
                checked={residencyStatus === "Non-Resident"}
                onChange={(e) => setResidencyStatus(e.target.value)}
                className="mr-2"
              />
              Non-Resident
            </label>
          </div>
        </>
      )}

      {nationality === "Foreigner" && residencyStatus === "Resident" && (
        <>
          <h4 className="mt-6 font-semibold">Is your stay in Pakistan solely because of your employment?</h4>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="employmentReason"
                value="Yes"
                checked={employmentReason === "Yes"}
                onChange={(e) => setEmploymentReason(e.target.value)}
                className="mr-2"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="employmentReason"
                value="No"
                checked={employmentReason === "No"}
                onChange={(e) => setEmploymentReason(e.target.value)}
                className="mr-2"
              />
              No
            </label>
          </div>
          {employmentReason === "No" && (
            <p className="mt-2 text-red-600">
              Please contact our tax experts for a one-to-one consultation to better understand the tax implications of your foreign sourced income under tax treaty.
            </p>
          )}
          {employmentReason === "Yes" && (
            <>
              <h4 className="mt-6 font-semibold">Was your stay in Pakistan as of June 30, 2023 more than 3 years?</h4>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="stayDuration"
                    value="Yes"
                    checked={stayDuration === "Yes"}
                    onChange={(e) => setStayDuration(e.target.value)}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="stayDuration"
                    value="No"
                    checked={stayDuration === "No"}
                    onChange={(e) => setStayDuration(e.target.value)}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              {stayDuration === "Yes" && (
                <p className="mt-2 text-red-600">
                  Please contact our tax experts for a one-to-one consultation to better understand the tax implications of your foreign sourced income under tax treaty.
                </p>
              )}
            </>
          )}
        </>
      )}

      <button
        type="submit"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Personal Info
      </button>
    </form>
  );
}
