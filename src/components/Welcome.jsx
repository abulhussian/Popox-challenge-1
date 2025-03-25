import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className=" container w-md mx-auto my-auto p-20">
      <h2 className="text-2xl font-bold mx-auto">Welcome to PopX</h2>
      <p className="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-6 flex flex-col ">
        <button
          onClick={() => navigate("/create-account")}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 "
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full mt-4 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
