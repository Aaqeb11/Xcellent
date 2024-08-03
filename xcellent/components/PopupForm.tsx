import React, { FC, useState } from 'react';
import Image from 'next/image';
import forward from "../public/Forward.png";


interface PopupFormProps {
    isOpen: boolean;
    onClose: () => void;
}
  
interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
const PopupForm: FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const template = process.env.NEXT_PUBLIC_TEMPLATE;
  const service = process.env.NEXT_PUBLIC_SERVICE;
  const key = process.env.NEXT_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-black border-2 border-[#9E0506] rounded-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image src={forward} alt="forward" />
          <h2 className="text-white text-3xl font-bold">Get a Quote</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded h-32"
            required
          ></textarea>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[linear-gradient(93deg,#E60404_0.45%,#800202_74.27%,#850202_99.52%,#820202_99.53%)] text-white px-6 py-2 rounded hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;