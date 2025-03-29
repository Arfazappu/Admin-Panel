import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import logo from "../assets/logo.png";
import authBG from "../assets/auth-bg.png";

function Welcome() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={authBG}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-[85%] max-w-4xl bg-black/10 backdrop-blur-xl rounded-2xl shadow-xl p-10 flex justify-center items-center">

      <div className="bg-white rounded-lg shadow-lg p-8 z-10 text-center">
        <div className="mb-6">
          <img src={logo} alt="logo" className="mx-auto w-24 h-24" />
        </div>

        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <h2 className="text-xl font-medium text-orange-500 mb-6">
          to the Free Shops App Admin Panel
        </h2>

        <p className="text-gray-600 mb-10 max-w-md mx-auto">
          Manage and monitor all aspects of your app seamlessly from one place.
          Use the tools below to get started.
        </p>

        <Button onClick={handleGetStarted}>Get Start</Button>
      </div>
      </div>
    </div>
  );
}

export default Welcome;
