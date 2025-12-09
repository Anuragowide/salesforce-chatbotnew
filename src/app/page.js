'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Salesforce Chatbot</h1>
          <p className="text-gray-600 mb-6">
            Welcome! This AI-powered chatbot is ready to be integrated into your Salesforce environment via iFrame embedding.
          </p>
          
          <div className="space-y-4 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Floating chat widget - always accessible</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Real-time message streaming</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Secure Salesforce integration via iFrame</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Minimize and restore functionality</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Deployment Status</h3>
            <p className="text-gray-600 mb-4">
              This app is ready to be deployed to Vercel and embedded in Salesforce using a Visualforce page.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Current Environment:</strong> Development (localhost:3000)</p>
              <p><strong>Integration Method:</strong> iFrame Encapsulation</p>
              <p><strong>Salesforce Hosting:</strong> Utility Bar via Visualforce Page</p>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-500 text-sm">
            👉 Look for the chat widget button in the bottom-right corner!
          </p>
        </div>
      </div>
    </main>
  );
}