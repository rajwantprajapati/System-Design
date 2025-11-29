const Login = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Login</h1>

      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit" className="mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
