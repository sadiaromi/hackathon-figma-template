'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const AccountPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Please fill this required field';
    if (!formData.email) newErrors.email = 'Please fill this required field';
    if (!formData.password) newErrors.password = 'Please fill this required field';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please fill this required field';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <div>
      <div className="relative h-[150px] sm:h-[200px] md:h-[250px] bg-[url('/bg-image/bg.image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4">
          <div className="relative pt-12 sm:pt-16 md:pt-20 text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Account</h1>
            <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Link href="/" className="hover:underline">Home</Link>
              <span>{'>'}</span>
              <Link href="/account" className="hover:underline">Account</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Account Form Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[{
              label: 'Full Name', name: 'fullName', type: 'text'
            }, {
              label: 'Email', name: 'email', type: 'email'
            }, {
              label: 'Password', name: 'password', type: 'password'
            }, {
              label: 'Confirm Password', name: 'confirmPassword', type: 'password'
            }].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-sm font-medium">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name as keyof FormData]}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                />
                {errors[name as keyof FormErrors] && (
                  <p className="text-red-500 text-sm">{errors[name as keyof FormErrors]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-[#B88E2F] text-white py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
