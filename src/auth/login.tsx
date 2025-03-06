import { useState } from "react";
import logo from '../assets/images/yoris_logo.png';

const Login = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("+234");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1D1A15] text-gold">
      <img src={logo} alt="Yoris Logo" className="" />
      {step === 1 && (
        <div className="w-80 flex flex-col space-y-4 p-6 ">
          <label className="text-sm">Country</label>
          <input type="text" className="border border-gold p-2 rounded bg-black text-gold" placeholder="Country" />
          <label className="text-sm">Your phone number</label>
          <input 
            type="text" 
            className="border border-gold p-2 rounded bg-black text-gold" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleNext} className="bg-[#c3ad60] text-black p-2 rounded  transition">Continue</button>
          <a className="text-white text-center font-normal" href="/auth/qr-login">LOG IN BY QR CODE</a>
        </div>
      )}
      {step === 2 && (
        
        <div className="w-80 flex flex-col space-y-4 p-6 ">
        
          <label className="text-sm">Email</label>
          <input 
            type="email" 
            className="border border-gold p-2 rounded bg-black text-gold" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleNext} className="bg-[#c3ad60] text-black p-2 rounded  transition">Continue</button>
        </div>
      )}
      {step === 3 && (
        <div className="w-80 flex flex-col space-y-4 p-6 ">
          <label className="text-sm">Enter OTP</label>
          <div className="flex justify-center space-x-5">
            {[...Array(4)].map((_, index) => (
              <input 
                key={index} 
                type="text" 
                className="border border-gold p-5 text-center w-18 rounded bg-black text-gold" 
                maxLength={1} 
                value={otp[index] || ""} 
                onChange={(e) => {
                  let newOtp = otp.split("");
                  newOtp[index] = e.target.value;
                  setOtp(newOtp.join(""));
                }}
              />
            ))}
          </div>
          <button className="bg-[#c3ad60] text-black p-2 rounded  transition">Verify</button>
        </div>
      )}
    </div>
  );
};

export default Login;