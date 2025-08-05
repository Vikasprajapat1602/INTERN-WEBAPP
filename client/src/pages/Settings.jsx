import React from "react";

export default function Settings() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
            <h1 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
                Settings
            </h1>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-10">


                {/* Language Selector */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Language</h2>
                    <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                </div>

                {/* Notification Settings */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Notifications</h2>
                    <div className="space-y-2">
                        <label className="flex items-center space-x-3">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                            <span>Email Notifications</span>
                        </label>
                        <label className="flex items-center space-x-3">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                            <span>SMS Alerts</span>
                        </label>
                    </div>
                </div>

                {/* Account Actions */}
                <div className="border-t pt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Account</h2>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                        Delete My Account
                    </button>
                </div>

            </div>
        </div>
    );
}
