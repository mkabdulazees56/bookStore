import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    // Send data to the server or handle it as needed
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h2>
        {submitted ? (
          <div className="text-center text-green-500">
            Thank you for contacting us. We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                type="email"
                id="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300" htmlFor="message">
                Message
              </label>
              <textarea
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                id="message"
                {...register('message', { required: 'Message is required' })}
                placeholder="Enter your message"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="btn bg-blue-500 w-full hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
