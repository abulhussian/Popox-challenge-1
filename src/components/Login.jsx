import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/account-settings");
  };
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center p-20 ">
      <h2 className="text-2xl font-bold text-center">
        Sign in to your PopX account
      </h2>
      <form onSubmit={handleLogin} className="mt-6 space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
