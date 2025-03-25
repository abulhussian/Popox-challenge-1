// import { use } from "react";
import { useNavigate } from "react-router-dom";
function CreateAccount() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account-settings");
  };
  return (
    <div className="p-5 flex flex-col">
      <h2 className="text-2xl font-bold text-center">
        Create your PopX account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col mx-auto md:w-1/4 w-full gap-5"
      >
        <input
          type="text"
          placeholder="Full Name"
          className=" w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Phone number"
          className=" w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email address"
          className=" w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className=" w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Company name"
          className=" w-full p-2 border border-gray-300 rounded"
          required
        />

        <div className="flex items-center justify-between">
          <label>Are you an Agency?</label>
          <div>
            <label className="mr-2">
              <input type="radio" name="agency" value="yes" required /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" required /> No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
