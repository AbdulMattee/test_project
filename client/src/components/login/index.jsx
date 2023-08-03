import { useState, useContext, useEffect } from "react";
import { loginAPI } from "../../api";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const { user: contextUser, setUser: setContextUser } = useContext(AppContext);
  console.log({ user });
  const navigate = useNavigate();

  useEffect(() => {
    if (contextUser.token) {
      navigate("/");
    }
  }, [contextUser.token]);
  //Sends Login request to the server
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data: response } = await loginAPI(user);
      console.log(response);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      setContextUser({
        userId: response.user.userId,
        username: response.user.username,
        token: response.token,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="rememberMe">Remember me</label>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                value={user.rememberMe}
                onChange={(e) =>
                  setUser({ ...user, rememberMe: e.target.checked })
                }
              />
              <br />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

// <section className="flex justify-center items-center flex-col h-96">
//   <h1 className="font-bold">Login Form</h1>
//   <div className="w-96 mx-auto">
//     <label
//       htmlFtmlFor="username"
//       className="block text-sm  mt-2 font-medium leading-6 text-gray-900"
//     >
//       Username
//     </label>
//     <div className="relative rounded-md shadow-sm">
//       <input
//         type="text"
//         required="true"
//         name="username"
//         id="username"
//         className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         placeholder="John Doe"
//       />
//     </div>
//     <label
//       htmlFtmlFor="password"
//       className="block text-sm font-medium leading-6 mt-2 text-gray-900"
//     >
//       Password
//     </label>
//     <div className="relative rounded-md shadow-sm">
//       <input
//         type="text"
//         required="true"
//         name="password"
//         id="password"
//         className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         placeholder="*********"
//       />
//     </div>
//   </div>
// </section>
