// src/pages/Register.jsx
import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        role: "Intern",
        motivation: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/apply/", formData);
            console.log(response.data);
            setSuccessMessage("Application submitted successfully!");
            setErrorMessage("");
            setFormData({
                full_name: "",
                email: "",
                phone: "",
                role: "Intern",
                motivation: "",
            });
        } catch (error) {
            console.error("Submission error:", error);
            setErrorMessage("Something went wrong. Please try again.");
            setSuccessMessage("");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
                    Intern/Volunteer Registration
                </h2>

                {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}
                {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

                <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded"
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded"
                />

                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full p-3 border rounded"
                >
                    <option value="Intern">Intern</option>
                    <option value="Volunteer">Volunteer</option>
                </select>

                <textarea
                    name="motivation"
                    placeholder="Why do you want to join?"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
}
