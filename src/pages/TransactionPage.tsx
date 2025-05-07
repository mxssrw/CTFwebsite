import React, { useState, useEffect } from 'react';

const TransactionPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    sessionStorage.removeItem("allowTransaction");
  }, []);
  return (
    <div className="transaction-page">
      <img
        src="https://llkhhzpiemful4l6.public.blob.vercel-storage.com/CTF-dyhMUfE1LJXuYzW2T9duJpPp8A8Ku6.jpg"
        alt="Transaction"
        className="transaction-image cursor-zoom-in rounded-lg shadow-md transition-transform duration-300 w-full h-auto"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="https://llkhhzpiemful4l6.public.blob.vercel-storage.com/CTF-dyhMUfE1LJXuYzW2T9duJpPp8A8Ku6.jpg"
            alt="Zoomed Transaction"
            className="max-w-full max-h-full p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          />
          <button
            className="absolute top-6 right-6 text-white text-2xl font-bold hover:text-red-400 transition"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;