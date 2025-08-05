import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminApplicants() {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/applicants/");
                setApplicants(res.data);
            } catch (err) {
                console.error("Error fetching applicants:", err);
            }
        };

        fetchApplicants();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 p-8">
            <h1 className="text-3xl font-semibold text-center text-indigo-800 mb-6">
                Registered Applicants
            </h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow rounded-lg">
                    <thead className="bg-indigo-200">
                        <tr>
                            <th className="text-left py-3 px-4">Name</th>
                            <th className="text-left py-3 px-4">Email</th>
                            <th className="text-left py-3 px-4">Phone</th>
                            <th className="text-left py-3 px-4">Role</th>
                            <th className="text-left py-3 px-4">Motivation</th>
                            <th className="text-left py-3 px-4">Submitted At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicants.map((a) => (
                            <tr key={a.id} className="border-t">
                                <td className="py-2 px-4">{a.full_name}</td>
                                <td className="py-2 px-4">{a.email}</td>
                                <td className="py-2 px-4">{a.phone}</td>
                                <td className="py-2 px-4">{a.role}</td>
                                <td className="py-2 px-4">{a.motivation}</td>
                                <td className="py-2 px-4">{new Date(a.submitted_at).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
