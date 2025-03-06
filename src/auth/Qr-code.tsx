import React from "react";

const QRLogin: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1D1A15]">
      <div className="flex flex-col items-center text-center p-6 bg-transparent">
        {/* QR Code Placeholder */}
        <div className="bg-white p-2 rounded-lg">
          <img
            src="https://via.placeholder.com/200" 
            alt="QR Code"
            className="w-48 h-48"
          />
        </div>

        {/* Instructions */}
        <h2 className="text-white text-lg font-semibold mt-4">
          Log in to Yoris Africa by QR Code
        </h2>
        <ul className="text-white text-sm mt-3 space-y-2">
          <li className="flex items-start space-x-2">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">1</span>
            <span>Open Yoris Africa on your phone</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">2</span>
            <span>Go to settings Devices Link Desktop Device</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">3</span>
            <span>Point your phone at this screen to confirm login</span>
          </li>
        </ul>

        {/* Alternative Login Option */}
        <a href="/auth/login" className="text-white text-sm mt-4 underline cursor-pointer">LOG IN BY Email</a>
      </div>
    </div>
  );
};

export default QRLogin;
