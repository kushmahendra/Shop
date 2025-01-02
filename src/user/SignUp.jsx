import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const SignUp = () => {
  const [title, setTitle] = useState('Mr.');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !email || !password || !captcha || !agreeTerms) {
      setError('Please fill in all required fields and agree to the terms.');
      return;
    }

    setError('');
    console.log('Form submitted:', {
      title,
      firstName,
      lastName,
      email,
      password,
      captcha,
      agreeTerms,
      newsletter,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>
        
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Mr.</option>
              <option>Mrs.</option>
            </select>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Captcha */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Captcha</label>
            <input
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              placeholder="Enter captcha"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="rounded border-gray-300"
              />
              <span>I agree to the terms. *</span>
            </label>

            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={() => setNewsletter(!newsletter)}
                className="rounded border-gray-300"
              />
              <span>Sign up for our newsletter</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-sm text-center mt-4 space-y-2">
          <p>
            Already have an account?{' '}
            <Link to='/signin' className="text-blue-500 hover:underline" >Log In</Link>
          </p>
          <p>
            <a href="/reset-password" className="text-blue-500 hover:underline">
              Or Reset password
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
